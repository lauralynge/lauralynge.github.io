import { useEffect, useRef } from "react";
import Matter from "matter-js";
import "./PillSection.css";

const CONFIG = {
  fleeRadius: 140, // hvor tæt musen skal være før en pill begynder at flygte (px)
  fleeForce: 0.5, // styrken af flugten — skaleres med hvor tæt musen er
  wallThickness: 60,
  groundThickness: 60,
  groundOffsetFromBottom: 0, // hvor langt "gulvet" ligger over containerens bund (= toppen af din footer)
  shakeUp: 8, // mindste opadgående fart ved "Ryst dem" (px pr. step)
  shakeUpRandom: 7, // + tilfældig ekstra fart opad
  shakeSide: 4, // maks. sidelæns fart til hver side
  shakeSpin: 0.04, // maks. rotationsfart ved "Ryst dem"
};

// ---------------------------------------------------------
// Flydende værdier: glider fra mobil (390px skærm) til desktop (1440px),
// så pillerne ikke skifter opførsel i ét hop ved 768px.
// [mobil, desktop]
// ---------------------------------------------------------
const FLUID = {
  gap: [6, 15], // usynlig ekstra plads omkring hver pill (px) — giver den permanente afstand
  restitution: [0.1, 0.4], // hvor meget pillerne hopper
  frictionAir: [0.02, 0.03], // luftmodstand – højere = langsommere bevægelse
  gravityScale: [0.0006, 0.001], // tyngdekraftens styrke (Matter's standard er 0.001)
  inertiaFactor: [6, 1], // > 1 gør pillerne tungere at dreje (snurrer mindre)
};
const FLUID_MIN = 390;
const FLUID_MAX = 1440;

// Værdierne for den aktuelle skærmbredde
function fluidValues() {
  const t = Math.min(
    Math.max((window.innerWidth - FLUID_MIN) / (FLUID_MAX - FLUID_MIN), 0),
    1,
  );
  return Object.fromEntries(
    Object.entries(FLUID).map(([key, [a, b]]) => [key, a + (b - a) * t]),
  );
}

// fleeFromMouse: piller flygter fra musen, og loftet er væk efter første fald (desktop)
//   – ellers er loftet kun væk, mens der rystes (mobil)
// shakeCount: hver gang tallet stiger, kastes pillerne op igen (mobilknappen)
export default function PillPhysics({ items, fleeFromMouse = true, shakeCount = 0 }) {
  const containerRef = useRef(null);
  const pillsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const engineRef = useRef(null);
  const bodiesRef = useRef([]);
  const wallTopRef = useRef(null);
  const topOpenRef = useRef(false); // loftet er fjernet
  const droppedRef = useRef(false); // pillerne er faldet første gang
  const fleeRef = useRef(fleeFromMouse);

  useEffect(() => {
    const container = containerRef.current;
    let width = container.offsetWidth; // opdateres ved resize (se ResizeObserver)
    let height = container.offsetHeight;
    let fluid = fluidValues();

    // enableSleeping: Matter lader hvilende kroppe "sove" i stedet for at
    // blive ved med at genberegne dem — det er det, der forhindrer den evige
    // mikro-vibration i bunden, uden at vi selv skal styre gravity manuelt.
    const engine = Matter.Engine.create({ enableSleeping: true });
    const world = engine.world;
    world.gravity.y = 0; // slået fra indtil sektionen scroller i view
    world.gravity.scale = fluid.gravityScale;

    // ---------------------------------------------------------
    // Gulv + vægge — usynlige, statiske bodies. Så længe de findes,
    // kan Matter's egen kollision aldrig lade en pill overlappe dem
    // eller hinanden (se "gap" i pill-størrelsen længere nede).
    // ---------------------------------------------------------
    const ground = Matter.Bodies.rectangle(
      width / 2,
      height - CONFIG.groundOffsetFromBottom - CONFIG.groundThickness / 2,
      width,
      CONFIG.groundThickness,
      { isStatic: true },
    );
    const wallLeft = Matter.Bodies.rectangle(
      -CONFIG.wallThickness / 2,
      -height, // høj væg (fra langt over toppen til bunden), så piller der
      CONFIG.wallThickness, // kastes ud af toppen, lander inde i boksen igen
      height * 4,
      { isStatic: true },
    );
    const wallRight = Matter.Bodies.rectangle(
      width + CONFIG.wallThickness / 2,
      -height, // høj væg (fra langt over toppen til bunden), så piller der
      CONFIG.wallThickness, // kastes ud af toppen, lander inde i boksen igen
      height * 4,
      { isStatic: true },
    );
    const wallTop = Matter.Bodies.rectangle(
      width / 2,
      -CONFIG.wallThickness / 2,
      width * 2,
      CONFIG.wallThickness,
      { isStatic: true },
    );
    Matter.World.add(world, [ground, wallLeft, wallRight, wallTop]);
    wallTopRef.current = wallTop;
    topOpenRef.current = false;
    droppedRef.current = false;

    // ---------------------------------------------------------
    // Piller — bodyen er lidt større end selve DOM-elementet (+ gap),
    // så der altid er luft mellem to piller, uden at vi skal skubbe
    // dem manuelt fra hinanden (Matter's rigid-body-kollision klarer det).
    // ---------------------------------------------------------
    const bodies = items.map((_, i) => {
      const pillEl = pillsRef.current[i];
      const w = pillEl.offsetWidth + fluid.gap;
      const h = pillEl.offsetHeight + fluid.gap;
      const angle = ((Math.random() * 16 - 8) * Math.PI) / 180; // let skæv rotation

      const body = Matter.Bodies.rectangle(
        40 + Math.random() * Math.max(1, width - 80),
        40 + Math.random() * (height * 0.4),
        w,
        h,
        {
          restitution: fluid.restitution,
          friction: 0.05,
          frictionAir: fluid.frictionAir,
          angle,
        },
      );
      body.plugin.size = { w, h }; // størrelsen uden rotation – bruges ved resize
      Matter.Body.setInertia(body, body.inertia * fluid.inertiaFactor);
      Matter.World.add(world, body);
      return body;
    });
    engineRef.current = engine;
    bodiesRef.current = bodies;

    // ---------------------------------------------------------
    // Resize: boksen og pillerne skalerer flydende med skærmen (CSS clamp),
    // så gulv, vægge og piller følger med — uden at simuleringen starter forfra.
    // ---------------------------------------------------------
    const onResize = () => {
      const newWidth = container.offsetWidth;
      const newHeight = container.offsetHeight;
      fluid = fluidValues();
      world.gravity.scale = fluid.gravityScale;

      // Gulv og loft er lige så brede som boksen – skalér dem med
      if (newWidth !== width) {
        Matter.Body.scale(ground, newWidth / width, 1);
        Matter.Body.scale(wallTop, newWidth / width, 1);
      }
      width = newWidth;
      height = newHeight;

      Matter.Body.setPosition(ground, {
        x: width / 2,
        y: height - CONFIG.groundOffsetFromBottom - CONFIG.groundThickness / 2,
      });
      Matter.Body.setPosition(wallTop, { x: width / 2, y: -CONFIG.wallThickness / 2 });
      Matter.Body.setPosition(wallLeft, { x: -CONFIG.wallThickness / 2, y: -height });
      Matter.Body.setPosition(wallRight, {
        x: width + CONFIG.wallThickness / 2,
        y: -height,
      });

      bodies.forEach((body, i) => {
        // Pillens nye størrelse (skriften skalerer med skærmen)
        const pillEl = pillsRef.current[i];
        const w = pillEl.offsetWidth + fluid.gap;
        const h = pillEl.offsetHeight + fluid.gap;
        const { w: oldW, h: oldH } = body.plugin.size;

        // Skalér uden rotation, ellers bliver rektanglet skævt
        const angle = body.angle;
        Matter.Body.setAngle(body, 0);
        Matter.Body.scale(body, w / oldW, h / oldH);
        Matter.Body.setAngle(body, angle);
        Matter.Body.setInertia(body, body.inertia * fluid.inertiaFactor);
        body.plugin.size = { w, h };
        body.restitution = fluid.restitution;
        body.frictionAir = fluid.frictionAir;

        // Skub piller ind, der nu ligger uden for boksen
        const halfW = (body.bounds.max.x - body.bounds.min.x) / 2;
        const x = Math.min(Math.max(body.position.x, halfW), width - halfW);
        if (x !== body.position.x) {
          Matter.Body.setPosition(body, { x, y: body.position.y });
        }
        Matter.Sleeping.set(body, false); // lad bunken falde til ro på ny
      });
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // ---------------------------------------------------------
    // Flugt fra musen — løbende (mousemove), ikke kun ved mouseenter,
    // og altid RETVENDT VÆK FRA cursoren, ikke tilfældig retning.
    // Styrken skaleres med hvor tæt musen er (tættere = hårdere skub).
    // ---------------------------------------------------------
    const onMouseMove = (e) => {
      if (!fleeRef.current) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    const onBeforeUpdate = () => {
      // Mobil: sæt loftet på igen, når alle piller er tilbage i boksen og på vej ned
      if (
        !fleeRef.current &&
        topOpenRef.current &&
        bodies.every((b) => b.bounds.min.y > 0 && b.velocity.y > -0.1)
      ) {
        Matter.World.add(world, wallTop);
        topOpenRef.current = false;
      }

      if (!fleeRef.current) return;
      const { x: mx, y: my } = mouseRef.current;
      bodies.forEach((body) => {
        const dx = body.position.x - mx;
        const dy = body.position.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < CONFIG.fleeRadius) {
          // En sovende body reagerer ikke på kræfter – væk den først
          if (body.isSleeping) Matter.Sleeping.set(body, false);
          const strength = (1 - dist / CONFIG.fleeRadius) * CONFIG.fleeForce;
          Matter.Body.applyForce(body, body.position, {
            x: (dx / (dist || 1)) * strength,
            y: (dy / (dist || 1)) * strength,
          });
        }
      });
    };
    Matter.Events.on(engine, "beforeUpdate", onBeforeUpdate);

    // ---------------------------------------------------------
    // Scroll-in: aktiver tyngdekraft ÉN gang — derefter stopper observeren,
    // så pillerne kun falder igen ved "Ryst dem" eller reload.
    // Matter's egen friction/restitution/sleeping sørger for at de falder til ro.
    // ---------------------------------------------------------
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          world.gravity.y = 1;
          droppedRef.current = true;
          observer.disconnect();
          // Pillerne har hængt stille uden tyngdekraft og er måske faldet i
          // "søvn" – og sovende bodies vågner ikke af sig selv, når
          // tyngdekraften slås til. Derfor frøs nogle af dem fast i luften.
          bodies.forEach((body) => Matter.Sleeping.set(body, false));
          // Desktop: loftet fjernes, så musen kan skubbe pillerne ud af toppen
          if (fleeRef.current) {
            Matter.World.remove(world, wallTop);
            topOpenRef.current = true;
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(container);

    // Runner i stedet for det deprecated Engine.run — så vi kan stoppe den
    // pænt i cleanup og undgå to kørende simuleringer på samme tid.
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    let rafId;
    const update = () => {
      bodies.forEach((body, i) => {
        const pillEl = pillsRef.current[i];
        pillEl.style.transform = `translate(${body.position.x - pillEl.offsetWidth / 2}px, ${
          body.position.y - pillEl.offsetHeight / 2
        }px) rotate(${body.angle}rad)`;
      });
      rafId = requestAnimationFrame(update);
    };
    update();

    // ---------------------------------------------------------
    // Oprydning — afgørende i React (særligt StrictMode i dev, hvor
    // effekten kører to gange). Uden dette kører flere engines/loops
    // oveni hinanden og kæmper om de samme DOM-elementer.
    // ---------------------------------------------------------
    return () => {
      cancelAnimationFrame(rafId);
      Matter.Runner.stop(runner);
      Matter.Events.off(engine, "beforeUpdate", onBeforeUpdate);
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
    };
  }, [items]);

  // ---------------------------------------------------------
  // Skift mellem mus (desktop) og knap (mobil) ved 768px — uden at
  // simuleringen starter forfra, så pillerne bliver liggende.
  // ---------------------------------------------------------
  useEffect(() => {
    fleeRef.current = fleeFromMouse;
    mouseRef.current = { x: -9999, y: -9999 };

    const engine = engineRef.current;
    if (!engine) return;
    // Desktop: loftet skal være væk, når pillerne er faldet første gang
    if (fleeFromMouse && droppedRef.current && !topOpenRef.current) {
      Matter.World.remove(engine.world, wallTopRef.current);
      topOpenRef.current = true;
    }
    // Mobil: loftet sættes på igen af beforeUpdate, når alle piller er inde
  }, [fleeFromMouse]);

  // ---------------------------------------------------------
  // "Ryst dem": fjern loftet, væk alle piller og kast dem op med
  // tilfældig fart og rotation — nogle forsvinder ud af toppen, og
  // tyngdekraften får dem alle til at falde ned igen.
  // ---------------------------------------------------------
  useEffect(() => {
    const engine = engineRef.current;
    if (!shakeCount || !engine) return;

    engine.world.gravity.y = 1; // hvis der rystes før sektionen er i view
    droppedRef.current = true;
    if (!topOpenRef.current) {
      Matter.World.remove(engine.world, wallTopRef.current);
      topOpenRef.current = true;
    }

    bodiesRef.current.forEach((body) => {
      Matter.Sleeping.set(body, false);
      Matter.Body.setVelocity(body, {
        x: (Math.random() * 2 - 1) * CONFIG.shakeSide,
        y: -(CONFIG.shakeUp + Math.random() * CONFIG.shakeUpRandom),
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * CONFIG.shakeSpin);
    });
  }, [shakeCount]);

  return (
    <div className="pill-physics-container" ref={containerRef}>
      {items.map((item, i) => (
        <div key={i} className="pill" ref={(el) => (pillsRef.current[i] = el)}>
          {item}
        </div>
      ))}
    </div>
  );
}

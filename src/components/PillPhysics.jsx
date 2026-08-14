import { useEffect, useRef } from "react";
import Matter from "matter-js";
import "./PillSection.css";

const CONFIG = {
  fleeRadius: 140, // hvor tæt musen skal være før en pill begynder at flygte (px)
  fleeForce: 0.5, // styrken af flugten — skaleres med hvor tæt musen er
  gap: 15, // usynlig ekstra plads omkring hver pill (px) — giver den permanente afstand
  wallThickness: 60,
  groundThickness: 60,
  groundOffsetFromBottom: 0, // hvor langt "gulvet" ligger over containerens bund (= toppen af din footer)
};

export default function PillPhysics({ items }) {
  const containerRef = useRef(null);
  const pillsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // enableSleeping: Matter lader hvilende kroppe "sove" i stedet for at
    // blive ved med at genberegne dem — det er det, der forhindrer den evige
    // mikro-vibration i bunden, uden at vi selv skal styre gravity manuelt.
    const engine = Matter.Engine.create({ enableSleeping: true });
    const world = engine.world;
    world.gravity.y = 0; // slået fra indtil sektionen scroller i view

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
      height / 2,
      CONFIG.wallThickness,
      height * 2,
      { isStatic: true },
    );
    const wallRight = Matter.Bodies.rectangle(
      width + CONFIG.wallThickness / 2,
      height / 2,
      CONFIG.wallThickness,
      height * 2,
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

    // ---------------------------------------------------------
    // Piller — bodyen er lidt større end selve DOM-elementet (+ gap),
    // så der altid er luft mellem to piller, uden at vi skal skubbe
    // dem manuelt fra hinanden (Matter's rigid-body-kollision klarer det).
    // ---------------------------------------------------------
    const bodies = items.map((_, i) => {
      const pillEl = pillsRef.current[i];
      const w = pillEl.offsetWidth + CONFIG.gap;
      const h = pillEl.offsetHeight + CONFIG.gap;
      const angle = ((Math.random() * 16 - 8) * Math.PI) / 180; // let skæv rotation

      const body = Matter.Bodies.rectangle(
        40 + Math.random() * Math.max(1, width - 80),
        40 + Math.random() * (height * 0.4),
        w,
        h,
        { restitution: 0.4, friction: 0.05, frictionAir: 0.03, angle },
      );
      Matter.World.add(world, body);
      return body;
    });

    // ---------------------------------------------------------
    // Flugt fra musen — løbende (mousemove), ikke kun ved mouseenter,
    // og altid RETVENDT VÆK FRA cursoren, ikke tilfældig retning.
    // Styrken skaleres med hvor tæt musen er (tættere = hårdere skub).
    // ---------------------------------------------------------
    const onMouseMove = (e) => {
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
      const { x: mx, y: my } = mouseRef.current;
      bodies.forEach((body) => {
        const dx = body.position.x - mx;
        const dy = body.position.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < CONFIG.fleeRadius) {
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
    // Scroll-in: aktiver tyngdekraft ÉN gang — ingen manuel "sluk igen"-logik.
    // Matter's egen friction/restitution/sleeping sørger for at de falder til ro.
    // ---------------------------------------------------------
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          world.gravity.y = 1;
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
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
    };
  }, [items]);

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

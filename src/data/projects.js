const projects = [
  {
    slug: "little-looms",
    title: "Little Looms",
    subtitle: "En webshop med fokus på branding og UI‑design",
    eyebrow: "Webshop & branding",
    year: "2025",
    summary: "En webshop med fokus på branding og UI‑design",
    description:
      "At handle børnetøj online handler for mange forældre om mere end at finde det rigtige produkt – det handler om at kunne stole på kvaliteten, uden at kunne mærke stoffet i hånden. Sammen med min gruppe designede og udviklede jeg en webshop-prototype til det fiktive børnetøjsmærke Little Looms, bygget til netop den usikkerhed: tydelig produktinformation, en størrelsesguide der tager tvivlen væk, og en rolig, skandinavisk visuel identitet, der signalerer kvalitet uden at råbe om det. Gennem kortsortering, tree testing og gentagne brugertests formede vi en informationsarkitektur, der gør det enkelt at navigere fra inspiration til køb. Designet blev udviklet i Figma – med eget design system og brand guideline – og realiseret som en kodet frontend-løsning i React, for at skabe en shoppingoplevelse, der føles lige så tryg som at handle i en fysisk butik.",
    tags: ["Branding", "UI", "Frontend"],
    mainImage: `${import.meta.env.BASE_URL}images/little-looms/little-looms-thumbnail.png`,
    content: [
      {
        type: "images",
        images: ["/images/little-looms/little-looms-hero.png"],
      },
      {
        type: "text",
        heading: "Et skandinavisk univers i børnehøjde",
        body: "Brandidentiteten er skabt til at føles varm, rolig og legende — uden at blive barnlig. Pasteller, håndtegnede elementer og et minimalistisk layout skaber et univers, der både taler til forældrenes æstetiske sans og barnets verden. Det visuelle udtryk er designet til at understøtte en følelse af kvalitet, uden at råbe om det.",
      },
      { type: "images", images: ["/videos/little-looms/hero-animation.mp4"] },
      {
        type: "images",
        images: [
          "/images/little-looms/smiley.png",
          "/images/little-looms/clouds.png",
        ],
      },
      {
        type: "images",
        images: ["/videos/little-looms/brand-guideline-animation.mp4"],
      },
      {
        type: "text",
        heading: "Fra inspiration til køb",
        body: "Webshoppen er designet til forældre, der vil handle trygt uden at bruge tid på at lede. Tydelige kategorier, filtrering og en størrelsesguide gør det let at finde det rigtige, mens rolige flader og store produktbilleder lader tøjet tale for sig selv. Resultatet er en oplevelse, der føles lige så overskuelig som at stå med produktet i hånden.",
      },
      {
        type: "images",
        images: ["/images/little-looms/desktop-girl-productpage.png"],
      },
      {
        type: "images",
        images: [
          "/images/little-looms/desktop-product-detail.png",
          "/images/little-looms/desktop-size-guide.png",
          "/images/little-looms/desktop-basket.png",
        ],
      },
      { type: "images", images: ["/images/little-looms/iphone-frames.png"] },
      { type: "images", images: ["/images/little-looms/badges.png"] },
      {
        type: "text",
        heading: "Et univers, der rækker ud over skærmen",
        body: "Little Looms skulle føles genkendeligt i alle møder med brandet — ikke kun på webshoppen. På sociale medier bringer håndtegnede elementer børnenes verden til live i korte animationer, og emballagen viderefører det samme rolige, legende udtryk, når pakken lander hjemme. Sammen skaber de en sammenhængende oplevelse fra første opslag til udpakning.",
      },
      {
        type: "images",
        images: [
          "/images/little-looms/some-clouds.png",
          "/videos/little-looms/some-carousel-animation.mp4",
        ],
      },
      {
        type: "images",
        images: [
          "/images/little-looms/some-sun-boy.png",
          "/images/little-looms/some-flower-girl.png",
        ],
      },
      {
        type: "images",
        images: ["/images/little-looms/little-looms-wrapping.png"],
      },
      {
        type: "text",
        heading: "Fra skitse til endeligt design",
        body: "Processen begyndte som en løs idé på papir, hvor struktur og flow blev tegnet op i sin mest simple form. Personaen Sofie var et tidligt pejlemærke, der gjorde det tydeligt, hvordan navigation og produktinformation skulle støtte en travl forælder i en hurtig beslutningsproces. Wireframes gav retningen skarphed og viste, hvordan hun skulle bevæge sig gennem oplevelsen. I den sidste fase blev alt samlet i en high‑fidelity prototype, hvor form, farver og detaljer faldt på plads og gav Little Looms sit endelige udtryk.",
      },
      { type: "images", images: ["/images/little-looms/persona-sofie.png"] },
      {
        type: "images",
        images: ["/images/little-looms/prototyping-iterations.png"],
      },
    ],
    team: [
      "Caroline Majlandt Clorius",
      "Cecilie Vestergaard Andersen",
      "Freia Mandrup Krog",
      "Mia Poder Olesen",
      "Laura Lynge Nielsen",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://carolineclorius.github.io/customer-experience-exam/",
      },
      {
        label: "Figma Prototype Desktop",
        href: "https://www.figma.com/proto/4sFs3W206XiXGdIT0VcNqu/Eksamensprojekt---Costumer-Experience?node-id=2580-987&t=VBF3M4br0Pwq6BgS-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2580%3A987&desktop-link-click-timestamp=1789996075914&desktop-ul-exp-bucket=V&page-id=954%3A6",
      },
      {
        label: "Figma Prototype Mobile",
        href: "https://www.figma.com/proto/4sFs3W206XiXGdIT0VcNqu/Eksamensprojekt---Costumer-Experience?node-id=7586-117301&viewport=-4866%2C-411%2C0.13&t=X5IH15XHGVdvXhi6-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7586%3A117301&show-proto-sidebar=1&page-id=7586%3A33876",
      },
    ],
  },
  {
    slug: "rumly",
    title: "Rumly",
    subtitle: "En digital løsning til roomie søgning",
    eyebrow: "Webapp & onboarding",
    year: "2025",
    summary: "En digital løsning til rumstyring og booking.",
    description:
      "At finde en roomie handler om mere end fire vægge og en delt husleje – det handler om tillid, kemi og tryghed i sin egen hverdag. Alligevel må de fleste unge i dag navigere i ustrukturerede opslag på sociale medier, hvor kompatibilitet er umulig at afkode, og risikoen for dårlige matches er høj. Sammen med min gruppe designede og udviklede jeg Rumly – en app, der samler boligsøgning og roomie-matching ét sted, bygget på en matchscore, der gør kompatibilitet konkret og synlig. Gennem interviews, kortsortering og gentagne brugertests formede vi en løsning bygget på tre principper: tryg, venlig og social. Designet blev udviklet i Figma og realiseret som en kodet prototype i React med Supabase som backend – for at skabe en oplevelse, der føles så tryg som at finde et rigtigt hjem.",
    tags: ["UX", "UI", "Webapp"],
    mainImage: `${import.meta.env.BASE_URL}placeholder.png`,
    content: [
      { type: "images", images: ["/images/placeholder.png"] }, // 1 billede → grid-1
      {
        type: "images",
        images: ["/images/placeholder.png", "/images/placeholder.png"],
      }, // 2 billeder → grid-2
      {
        type: "images",
        images: [
          "/images/placeholder.png",
          "/images/placeholder.png",
          "/images/placeholder.png",
        ], // 3 billeder → grid-3
      },
      {
        type: "images",
        images: [
          "/images/placeholder.png",
          "/images/placeholder.png",
          "/images/placeholder.png",
          "/images/placeholder.png",
        ], // 4 billeder → grid-4
      },
    ],
    team: [
      "Caroline Majlandt Clorius",
      "Cecilie Vestergaard Andersen",
      "Freia Mandrup Krog",
      "Mia Poder Olesen",
      "Laura Lynge Nielsen",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://cecilieva.github.io/webapp-eksamensprojekt/?fbclid=IwY2xjawSLnOpleHRuA2FlbQIxMABicmlkETFqUmRsYXFlT0VERHZvNk12c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuT8ItRezfG7sRZd69HAPqAKU9KtvDzLQ1C7KVUlzSWXr1GEAGMMidK9Y-B-_aem_9ed94Kho79SAPk9EWKdtCQ",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/yiLh5FD1vqunvvlJpx0qGb/Webapp-Eksamensprojekt?node-id=1109-3265&t=ZZ5rPqX5QnnWzIYo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1109%3A3265&desktop-link-click-timestamp=1789996316119&desktop-ul-exp-bucket=V&page-id=51%3A30",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },

  {
    slug: "akvarie",
    title: "Akvarie",
    subtitle: "En interaktiv oplevelse",
    eyebrow: "Interaktiv touchskærm",
    year: "2024",
    summary: "Interaktiv touchskærmsoplevelse designet til et akvarie‑miljø",
    description:
      "Akvariet i Storcenter Nord ønskede at gøre viden om havets dyr til noget børn ikke bare læser, men opdager. Gennem observationer og samtaler med børnefamilier i akvariet designede og udviklede jeg en interaktiv touchskærm-prototype, hvor fisk og skabninger kommer til live gennem bevægelse og leg. Tanken var enkel: børn lærer bedst, når de selv får lov at trykke, udforske og blive overraskede. Legende illustrationer og en nysgerrig krabbe som guide møder en simpel, intuitiv interaktion, bygget i Figma og kodet i HTML, CSS og JavaScript – for at skabe en oplevelse, der føles som leg, men fungerer som læring.",
    tags: ["Interaktivt design", "Grafisk design", "UX"],
    mainImage: `${import.meta.env.BASE_URL}placeholder.png`,
    content: [
      {
        type: "images",
        images: ["/images/placeholder.png"],
      }, // 1 billede → grid-1
      {
        type: "images",
        images: ["/images/placeholder.png", "/images/placeholder.png"],
      }, // 2 billeder → grid-2
      {
        type: "images",
        images: [
          "/images/placeholder.png",
          "/images/placeholder.png",
          "/images/placeholder.png",
        ], // 3 billeder → grid-3
      },
    ],
    team: ["Laura Lynge Nielsen"],
    links: [
      {
        label: "Live Site",
        href: "https://lauralynge.github.io/Eksamen_Akvarie/",
      },
    ],
  },

  {
    slug: "mellemrum",
    title: "Mellemrum",
    subtitle: "Optimeringscase (1)",
    eyebrow: "Product Optimization",
    summary:
      "En lokal kultur- og eventplatform for koncerter, talks, workshops og fællesskaber i Aarhus.",
    description: "Beskrivelsen af projektet her.",
    tags: ["Frontend", "React", "Database"],
    mainImage: `${import.meta.env.BASE_URL}coming-soon.svg`,
    rows: [["/images/coming-soon-big.svg"]],
    team: ["Laura Lynge Nielsen"],
    links: [
      {
        label: "Live Site",
        href: "https://lauralynge.github.io/mellemrum-case-1//",
      },
      {
        label: "Github Repo",
        href: "https://github.com/lauralynge/mellemrum-case-1",
      },
    ],
  },
  {
    slug: "case-2",
    title: "Case 2",
    subtitle: "Case (2)",
    eyebrow: "Product Optimization",
    summary: "Kort beskrivelse her",
    description: "Beskrivelsen af projektet her.",
    tags: ["Frontend", "React", "Database"],
    mainImage: `${import.meta.env.BASE_URL}coming-soon.svg`,
    content: [
      {
        type: "images",
        images: ["/images/coming-soon-big.svg"],
      },
    ],
    team: ["Laura Lynge Nielsen"],
    links: [
      {
        label: "Figma Prototype",
        href: "https://lauralynge.github.io/mellemrum-case-1//",
      },
    ],
  },
  {
    slug: "case-3",
    title: "Case 3",
    subtitle: "Case (3)",
    eyebrow: "Product Optimization",
    summary: "Kort beskrivelse her",
    description: "Beskrivelsen af projektet her.",
    tags: ["Frontend", "React", "Database"],
    mainImage: `${import.meta.env.BASE_URL}coming-soon.svg`,
    content: [
      {
        type: "images",
        images: ["/images/coming-soon-big.svg"],
      },
    ],
    team: ["Laura Lynge Nielsen"],
    links: [],
  },
];
export default projects;

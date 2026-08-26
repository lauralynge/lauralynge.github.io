const projects = [
  {
    slug: "rumly",
    title: "Rumly",
    subtitle: "En digital løsning til roomie søgning.",
    eyebrow: "Webapp & onboarding",
    year: "2025",
    summary: "En digital løsning til rumstyring og booking.",
    description:
      "At finde en roomie handler om mere end fire vægge og en delt husleje – det handler om tillid, kemi og tryghed i sin egen hverdag. Alligevel må de fleste unge i dag navigere i ustrukturerede opslag på sociale medier, hvor kompatibilitet er umulig at afkode, og risikoen for dårlige matches er høj. Sammen med min gruppe designede og udviklede jeg Rumly – en app, der samler boligsøgning og roomie-matching ét sted, bygget på en matchscore, der gør kompatibilitet konkret og synlig. Gennem interviews, kortsortering og gentagne brugertests formede vi en løsning bygget på tre principper: tryg, venlig og social. Designet blev udviklet i Figma og realiseret som en kodet prototype i React med Supabase som backend – for at skabe en oplevelse, der føles så tryg som at finde et rigtigt hjem.",
    tags: ["UX", "UI", "Webapp"],
    mainImage: `${import.meta.env.BASE_URL}placeholder.png`,
    rows: [
      ["/images/rumly-2-hvid.svg"], // 1 billede → grid-1
      ["/images/placeholder.png", "/images/placeholder.png"], // 2 billeder → grid-2
      [
        "/images/placeholder.png",
        "/images/placeholder.png",
        "/images/placeholder.png",
      ], // 3 billeder → grid-3
      [
        "/images/placeholder.png",
        "/images/placeholder.png",
        "/images/placeholder.png",
        "/images/placeholder.png",
      ], // 4 billeder → grid-4
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
        href: "https://username.github.io",
      },
      {
        label: "Figma Prototype",
        href: "https://github.com/username/username.github.io",
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
    summary: "Interaktiv touchskærmsoplevelse designet til et akvarie‑miljø.",
    description:
      "Akvariet i Storcenter Nord ønskede at gøre viden om havets dyr til noget børn ikke bare læser, men opdager. Gennem observationer og samtaler med børnefamilier i akvariet designede og udviklede jeg en interaktiv touchskærm-prototype, hvor fisk og skabninger kommer til live gennem bevægelse og leg. Tanken var enkel: børn lærer bedst, når de selv får lov at trykke, udforske og blive overraskede. Legende illustrationer og en nysgerrig krabbe som guide møder en simpel, intuitiv interaktion, bygget i Figma og kodet i HTML, CSS og JavaScript – for at skabe en oplevelse, der føles som leg, men fungerer som læring.",
    tags: ["Interaktivt design", "Grafisk design", "UX"],
    mainImage: `${import.meta.env.BASE_URL}placeholder.png`,
    rows: [
      ["/images/placeholder.png"], // 1 billede → grid-1
      ["/images/placeholder.png", "/images/placeholder.png"], // 2 billeder → grid-2
      [
        "/images/placeholder.png",
        "/images/placeholder.png",
        "/images/placeholder.png",
      ], // 3 billeder → grid-3
    ],
    team: ["Laura Lynge Nielsen"],
    links: [
      {
        label: "Live Site",
        href: "https://username.github.io",
      },
      {
        label: "Figma Prototype",
        href: "https://github.com/username/username.github.io",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },

  {
    slug: "little-looms",
    title: "Little Looms",
    subtitle: "En webshop med fokus på branding og UI‑design.",
    eyebrow: "Webshop & branding",
    year: "2025",
    summary: "En webshop med fokus på branding og UI‑design.",
    description:
      "At handle børnetøj online handler for mange forældre om mere end at finde det rigtige produkt – det handler om at kunne stole på kvaliteten, uden at kunne mærke stoffet i hånden. Sammen med min gruppe designede og udviklede jeg en webshop-prototype til det fiktive børnetøjsmærke Little Looms, bygget til netop den usikkerhed: tydelig produktinformation, en størrelsesguide der tager tvivlen væk, og en rolig, skandinavisk visuel identitet, der signalerer kvalitet uden at råbe om det. Gennem kortsortering, tree testing og gentagne brugertests formede vi en informationsarkitektur, der gør det enkelt at navigere fra inspiration til køb. Designet blev udviklet i Figma – med eget design system og brand guideline – og realiseret som en kodet frontend-løsning i React, for at skabe en shoppingoplevelse, der føles lige så tryg som at handle i en fysisk butik.",
    tags: ["Branding", "UI", "Frontend"],
    mainImage: `${import.meta.env.BASE_URL}placeholder.png`,
    rows: [
      ["/images/placeholder.png"], // 1 billede → grid-1
      ["/images/placeholder.png", "/images/placeholder.png"], // 2 billeder → grid-2
      [
        "/images/placeholder.png",
        "/images/placeholder.png",
        "/images/placeholder.png",
      ], // 3 billeder → grid-3
      ["/images/placeholder.png", "/images/placeholder.png"], // 2 billeder → grid-2
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
        href: "https://username.github.io",
      },
      {
        label: "Figma Prototype",
        href: "https://github.com/username/username.github.io",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/username/username.github.io",
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
    links: [],
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
    rows: [["/images/coming-soon-big.svg"]],
    team: ["Laura Lynge Nielsen"],
    links: [],
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
    rows: [["/images/coming-soon-big.svg"]],
    team: ["Laura Lynge Nielsen"],
    links: [],
  },
  {
    slug: "test-1",
    title: "Stock grafik",
    subtitle: "En samling af stock grafik",
    eyebrow: "Grafik & design",
    summary: "En samling af stock grafik.",
    description: "Her leger jeg lidt med grafik",
    tags: ["Grafik", "Design"],
    mainImage: `${import.meta.env.BASE_URL}coming-soon.svg`,
    rows: [["/images/coming-soon-big.svg"]],
    team: ["Laura Lynge Nielsen"],
    links: [],
  },
  {
    slug: "test-2",
    title: "Plakater",
    subtitle: "En samling af plakater",
    eyebrow: "Grafik & design",
    summary: "En samling af plakater.",
    description: "Her leger jeg lidt med grafik",
    tags: ["Grafik", "Design"],
    mainImage: `${import.meta.env.BASE_URL}coming-soon.svg`,
    rows: [["/images/coming-soon-big.svg"]],
    team: ["Laura Lynge Nielsen"],
    links: [],
  },
];
export default projects;

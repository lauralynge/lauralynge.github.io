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
    gridImage: `${import.meta.env.BASE_URL}images/little-looms/little-looms-grid-thumbnail.png`,
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
        images: ["/videos/little-looms/brand-guideline.mp4"],
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
    gridImage: `${import.meta.env.BASE_URL}placeholder.png`,
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
    slug: "again-by-la-rouge",
    title: "AGAIN By LA ROUGE",
    subtitle: "Et Seconhand subbrand til LA RŌUGE",
    eyebrow: "Branding & re-commerce",
    summary: "Et Seconhand subbrand til LA RŌUGE",
    description:
      "Secondhand-markedet vokser fortsat, og flere forbrugere ser værdien i at købe kvalitetsprodukter til en lavere pris. Selvom LA RŌUGE allerede tilbyder secondhand, er funktionen endnu ikke blevet en naturlig del af kundeoplevelsen. Mange vælger i stedet Vinted, når de vil sælge deres tøj, og nye besøgende bliver sjældent længe nok til at engagere sig. Gennem vores analyse identificerede vi tre centrale udfordringer: manglende kendskab til platformen, begrænset tryghed i købs- og salgsprocessen og en brugerrejse, der ikke er tilstrækkelig enkel. Vores løsning blev et subbrand, der giver LA RŌUGEs re-commerce sit eget navn, sin egen stemme og en digital brugerrejse, som gør det lige så nemt at sælge sit gamle LA RŌUGE-tøj, som det er at finde sit næste. Jeg havde særligt fokus på brandidentiteten, men var også med i udviklingen af både prototypen og branddecket.",
    tags: ["Branding", "Koncept", "UX"],
    mainImage: `${import.meta.env.BASE_URL}images/again/again-thumbnail.png`,
    gridImage: `${import.meta.env.BASE_URL}images/again/again-grid-thumbnail.png`,
    content: [
      {
        type: "images",
        images: ["/images/again/again-hero.png"],
      },
      {
        type: "text",
        heading: "Secondhand lever i skyggen af hovedbrandet",
        body: "LA RŌUGE tilbyder allerede secondhand, men det er en funktion, ikke et univers. Vores analyse bygger på LA RŌUGEs egne salgsdata og kundeprofil, og tallene viser tydeligt problemet: kunderne vil gerne sælge, men vælger Vinted, og de besøgende, der finder vej, bliver ikke hængende. Vi pegede på tre centrale udfordringer: manglende kendskab, begrænset tryghed og en utilstrækkelig brugerrejse.",
      },
      {
        type: "images",
        images: ["/images/again/again-pre.png"],
      },
      {
        type: "images",
        images: [
          "/images/again/data-1.png",
          "/images/again/data-2.png",
          "/images/again/data-3.png",
        ],
      },
      {
        type: "text",
        heading: "To kunder, to behov",
        body: "LA RŌUGEs data viste, at kernekunden er omkring 47 år. Hun er sjældent secondhand-køber, men har garderoben fuld af LA RŌUGE – hun er derfor vigtigst som sælger. Samtidig viste tallene fra LA RŌUGE, at 47 % af de 18–49-årige køber secondhand online, mod under 20 % af de 50–79-årige. Det pegede på en ny målgruppe. Den yngre kunde køber ikke nødvendigvis brugt for bæredygtighedens skyld, men for at få adgang til et brand, hun ellers ikke ville betale fuld pris for. Derfor designede vi til to roller frem for én.",
      },
      {
        type: "images",
        images: [
          "/images/again/kunde-1.png",
          "/images/again/kunde-2.png",
          "/images/again/data-secondhand.png",
        ],
      },
      {
        type: "images",
        images: ["/images/again/again-cyklus.png"],
      },
      {
        type: "text",
        heading: "Fra funktion til univers",
        body: "LA RŌUGEs secondhand-tilbud fungerede som en enkeltstående funktion frem for et samlet univers. For at give re-commerce en tydeligere plads i kundeoplevelsen udviklede vi AGAIN, et subbrand med eget navn, egen identitet og egen stemme. Målet var at gøre det lige så attraktivt at sælge sit gamle LA RŌUGE-tøj, som det er at finde sit næste. For LA RŌUGE kan AGAIN blive indgangen for en yngre kunde, der senere køber nyt – og holde salget af brugt LA RŌUGE-tøj inden for brandets egne rammer i stedet for på Vinted.",
      },
      {
        type: "images",
        images: [
          "/images/again/secondhand-pre-mobil.png",
          "/images/again/again-forside-mobil.png",
        ],
      },
      {
        type: "images",
        images: ["/images/again/again-logo-bordeaux.png"],
      },
      {
        type: "text",
        heading: "Et nyt brand med samme DNA",
        body: "AGAIN skulle stå på egne ben, men stadig føles som LA RŌUGE. Vi valgte derfor en Branded House-struktur, hvor AGAIN supplerer hovedbrandet i stedet for at konkurrere med det. Vi fravalgte et helt selvstændigt brand, fordi “By LA RŌUGE” netop er den tillid, der adskiller AGAIN fra Vinted. Bordeauxen og den feminine serif er arvet fra moderbrandet, mens terracottaen og den mere uformelle tone er nye. Logoet samler det i to lag: bordeaux som LA RŌUGEs fundament og terracotta som tøjets nye kapitel. For et subbrand handler det nemlig ikke kun om at skille sig ud – det skal også låne nok af moderbrandet til at føles trygt.",
      },
      {
        type: "images",
        images: ["/images/again/logo-lag.png"],
      },
      {
        type: "images",
        images: [
          "/images/again/logo-1.png",
          "/images/again/logo-2.png",
          "/images/again/logo-3.png",
          "/images/again/logo-4.png",
        ],
      },
      {
        type: "images",
        images: ["/images/again/moodboard.png"],
      },
      {
        type: "images",
        images: ["/images/again/farver.png"],
      },
      {
        type: "images",
        images: [
          "/images/again/kvinde-cardigan.png",
          "/images/again/citat-bordeaux.png",
        ],
      },
      {
        type: "images",
        images: ["/images/again/font-1.png", "/images/again/font-2.png"],
      },
      {
        type: "images",
        images: ["/images/again/citat-beige.png"],
      },
      {
        type: "text",
        heading: "Brandet omsat til to brugerrejser",
        body: "For at skabe en mere enkel og tryg oplevelse udviklede vi både køber- og sælgerflows. Fokus var at reducere friktion, skabe gennemsigtighed omkring produkternes stand og gøre det let at give tøjet et nyt liv. Løsningen er endnu ikke testet med brugere, så næste skridt ville være at teste begge rejser med kunder fra hver målgruppe – især om standvurderingen og de 30 % i gavekort er nok til at flytte salget væk fra Vinted.",
      },
      {
        type: "images",
        images: ["/images/again/køber-flow.png"],
      },
      {
        type: "images",
        images: ["/images/again/card-highlights.png"],
      },
      {
        type: "images",
        images: ["/images/again/sælger-flow.png"],
      },
      {
        type: "images",
        images: ["/images/again/ekstra-1.png", "/images/again/ekstra-2.png"],
      },
    ],
    team: [
      "Cecilie Vestergaard Andersen",
      "Mia Poder Olesen",
      "Laura Lynge Nielsen",
    ],
    links: [
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/wqYvK3pZT2mVYvJZEfyBfD/La-Rouge---Case-3?node-id=508-2148&viewport=4756%2C-2403%2C0.23&t=vtCvpimaEKqMhtXG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=508%3A2148&show-proto-sidebar=1&page-id=200%3A766",
      },
      {
        label: "Branddeck",
        href: `${import.meta.env.BASE_URL}pdf/AgainByLaRouge-branddeck.pdf`,
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
    gridImage: `${import.meta.env.BASE_URL}placeholder.png`,
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
    subtitle: "En lokal kultur- og eventplatform.",
    eyebrow: "Product Optimization",
    summary:
      "En lokal kultur- og eventplatform for koncerter, talks, workshops og fællesskaber i Aarhus.",
    description: [
      "Mellemrum er en kulturplatform for Aarhus, hvor brugere finder og tilmelder sig lokale arrangementer, og arrangører opretter events og holder styr på tilmeldinger. Udgangspunktet var en eksisterende løsning med duplikeret kode, manglende fejlhåndtering og en datamodel, der ikke kunne vokse. Samtidig kunne brugere ikke tilmelde sig, så arrangører havde intet at holde styr på.",
      "Jeg videreudviklede platformen med en normaliseret datamodel, et tilmeldingsflow, der gemmer i databasen, afviser dubletter og viser ledige pladser, og et redesignet overblik, hvor arrangører kan søge og gruppere tilmeldinger. Resultatet er en platform, hvor brugere kan se med det samme, om der er plads, og arrangører kan finde deres gæster uden at lede.",
      "Forbedringerne i kode og database er eget arbejde.",
    ],
    tags: ["Webudvikling", "Databasedesign ", "UX", "Frontend-arkitektur"],
    mainImage: `${import.meta.env.BASE_URL}coming-soon.svg`,
    gridImage: `${import.meta.env.BASE_URL}images/mellemrum/mellemrum-grid-thumbnail.png`,
    content: [
      {
        type: "images",
        images: ["/images/mellemrum/mellemrum-hero.png"],
      },
      {
        type: "text",
        heading: "Fra fælles audit til egne prioriteringer",
        body: "Casen startede med en fælles teknisk audit ved studiebordet. Det var fra start tydeligt, at tilmeldingsformularen slet ikke virkede, så tilmeldinger hverken blev gemt eller koblet til events – derfor blev det det vigtigste punkt. Ud af 30 fund udvalgte jeg dem med størst betydning for brugere og videre udvikling, og skemaet viser min prioritering: først struktur og data, derefter det, brugerne mærker.",
      },
      {
        type: "images",
        images: ["/images/mellemrum/smiley.png"],
      },
      {
        type: "images",
        images: ["/images/mellemrum/mellemrum-audit.png"],
      },
      {
        type: "text",
        heading: "Struktur, der kan vokse",
        body: "Den eksisterende løsning bestod af få store sidefiler, én lang styles.css og Supabase-kald skrevet direkte på hver side. Jeg delte siderne op i genbrugelige komponenter med egne CSS Modules, samlede farver og typografi i globale variabler og flyttede datahentningen til services med fælles fejl- og loadingbeskeder. I databasen normaliserede jeg data, så tilmeldinger peger på et event, og venues har deres egen tabel. Forløbet viste, hvor meget datamodellen bestemmer – da den først var på plads, blev frontenden markant enklere. For den, der skal bygge videre, betyder det, at en ændring kun skal laves ét sted.",
      },
      {
        type: "images",
        images: ["/images/mellemrum/mellemrum-komponenter.png"],
      },
      {
        type: "images",
        images: [
          "/images/mellemrum/komponentstruktur-1.png",
          "/images/mellemrum/komponentstruktur-2.png",
        ],
      },
      {
        type: "images",
        images: [
          "/images/mellemrum/datastruktur-1.png",
          "/images/mellemrum/datastruktur-2.png",
        ],
      },
      {
        type: "text",
        heading: "Et flow, brugeren kan mærke",
        body: "Med kapacitet på hvert event kan brugeren se, hvor mange pladser der er tilbage, allerede på eventkortet. Tilmeldingen gemmes nu i databasen, og skrives e-mailen forkert, får brugeren besked, før formularen sendes. En bekræftelse erstatter formularen, og er man allerede tilmeldt, får man besked i stedet for at oprette en dublet. Det giver brugeren tryghed om sin plads – og arrangøren et deltagertal, der er til at stole på. Kapacitetstjekket sker i browseren, hvilket jeg bevidst valgte inden for tidsrammen. Det kan i sjældne tilfælde give overbooking, så næste skridt er at flytte tjekket til databasen.",
      },
      {
        type: "images",
        images: ["/images/mellemrum/event-cards.png"],
      },
      {
        type: "images",
        images: ["/images/mellemrum/detail-page.png"],
      },
      {
        type: "images",
        images: ["/images/mellemrum/tilmeldingsflows.png"],
      },
      {
        type: "text",
        heading: "Overblik for arrangøren",
        body: "Arrangørens tilmeldinger lå i én lang tabel. Nu er de grupperet pr. event, og arrangøren kan søge efter navn eller event og hurtigt se, hvem der kommer. Samtidig rettede jeg aria-labels, alt-tekster og sidens sprog, så skærmlæsere læser indholdet korrekt. Situationer som manglende data og events, der ikke findes, er testet ved at simulere dem, så siden altid giver brugeren en vej videre. Værdien bygger dermed på testede flows – det naturlige næste skridt ville være at teste løsningen med rigtige arrangører.",
      },
      {
        type: "images",
        images: ["/images/mellemrum/tilmeldingsoverblik.png"],
      },
      {
        type: "images",
        images: [
          "/images/mellemrum/loading-events.png",
          "/images/mellemrum/not-found-message.png",
        ],
      },
    ],
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
    gridImage: `${import.meta.env.BASE_URL}coming-soon.svg`,
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
];
export default projects;

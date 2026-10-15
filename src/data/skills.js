// Indhold til Kompetencer-siden

// "Det kan jeg" – fagområder med tilhørende værktøjer/metoder
export const skillAreas = [
  {
    title: "Frontendudvikling",
    tags: ["React", "HTML & CSS", "Supabase", "Accessibility", "Responsivitet"],
  },
  {
    title: "UX/UI Design",
    tags: ["Wireframes", "Prototyper", "Brugerrejser", "Microinteractions"],
  },
  {
    title: "Konceptudvikling",
    tags: ["Research", "Idéudvikling", "Visuel identitet", "Problemløsning"],
  },
  {
    title: "Grafisk design",
    tags: ["Visuel identitet", "Typografi", "Brand guideline"],
  },
  {
    title: "Motion design",
    tags: ["After Effects", "Premiere Pro", "Animation"],
  },
];

// "Min værktøjskasse" – sætningen læses i rækkefølge. Tekst er almindelige ord,
// { tool } bliver en pille, og "after" er tegnsætning, der hænger fast på pillen
export const toolSentence = [
  "Jeg skitserer idéer, tegner og bygger prototyper i",
  { tool: "Figma", after: "." },
  "Jeg koder i",
  { tool: "VS Code" },
  "med",
  { tool: "JavaScript" },
  "og",
  { tool: "React", after: "," },
  "holder styr på koden i",
  { tool: "GitHub" },
  "og bygger backend i",
  { tool: "Supabase" },
  "— og sætter det hele i bevægelse med",
  { tool: "Jitter", after: "." },
];

// "Sådan arbejder jeg" – soft skills som farvede kort
export const softSkills = [
  {
    title: "Nysgerrig",
    text: "Jeg stiller spørgsmål, prøver nyt af og lærer hurtigt det, opgaven kræver.",
    color: "light-blue",
  },
  {
    title: "Legende",
    text: "Jeg tror på, at de bedste idéer opstår, når man tør lege og afprøve.",
    color: "green",
  },
  {
    title: "Struktureret",
    text: "Jeg deler store opgaver op i små dele og holder styr på helheden.",
    color: "orange",
  },
  {
    title: "Samarbejdende",
    text: "Jeg trives i teams, hvor vi bygger videre på hinandens idéer.",
    color: "blue",
  },
  {
    title: "Detaljeorienteret",
    text: "Jeg lægger mærke til de små ting, der gør helheden bedre.",
    color: "pink",
  },
  {
    title: "Empatisk",
    text: "Jeg sætter mig i andres sted — både kollegers og brugeres.",
    color: "burgundy",
  },
];

// "Kompetencer i praksis" – jobs, nyeste først
export const experiences = [
  {
    period: "April 2025 – nu",
    title: "Butiksmedarbejder",
    text: "Daglig kundekontakt har lært mig at forstå behov hurtigt, skabe gode oplevelser og bevare overblikket i et team — også når der er travlt.",
  },
  {
    period: "Januar 2024 – nu",
    title: "Content Writer",
    text: "Jeg producerer undertekster til en online certificeringsuddannelse og formidler komplekst indhold klart og letforståeligt — struktureret og med styr på deadlines og kvalitet.",
  },
  {
    period: "Oktober 2022 – juni 2023",
    title: "Pædagogmedhjælper",
    text: "At samarbejde med børn og kolleger og tilpasse mig forskellige behov og situationer har gjort mig tålmodig, struktureret og opmærksom på detaljer.",
  },
];

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

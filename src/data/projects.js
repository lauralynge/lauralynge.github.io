const projects = [
  {
    slug: "portfolio",
    title: "Portfolio",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Portfolioen viser udvalgte projekter og fungerer som et udgangspunkt for at arbejde med komponenter, routing, styling og deployment.",
    tags: ["React", "Vite", "GitHub Pages"],
    image: `${import.meta.env.BASE_URL}portfolio-placeholder.svg`,
    links: [
      {
        label: "Live site",
        href: "https://username.github.io",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },
  {
    slug: "case-study",
    title: "Case study",
    year: "2026",
    summary: "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    tags: ["Design", "Frontend", "Proces"],
    image: `${import.meta.env.BASE_URL}portfolio-placeholder.svg`,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },
];

export default projects;

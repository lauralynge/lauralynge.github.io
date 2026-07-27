# username.github.io - React Portfolio Template

**Rasmus Cederdorff (RACE)**  
Senior Lecturer & Web App Developer  
race@eaaa.dk

---

Dette er en React portfolio-template til GitHub Pages.

Brug templaten til at oprette dit eget repository med navnet:

```text
[dit-github-brugernavn].github.io
```

Hvis dit GitHub-brugernavn fx er `race-js`, skal dit repository hedde:

```text
race-js.github.io
```

Når portfolioen er deployet, ligger den på:

```text
https://[dit-github-brugernavn].github.io
```

Billederne i guiden bruger GitHub-brugeren `race-js` som eksempel. Derfor hedder repositoryet `race-js.github.io`, og eksemplets portfolio ligger på `https://race-js.github.io`. Du skal bruge dit eget GitHub-brugernavn.

## Hvad templaten indeholder

- Vite + React
- React Router til sider og navigation
- sider til forside, projekter, projektdetaljer, om mig, kontakt og 404
- projektdata i `src/data/projects.js`
- styling i `src/index.css`
- automatisk deployment til GitHub Pages med `.github/workflows/deploy.yml`

## Eksempler på deployede portfolioer på GitHub Pages

GitHub Pages er gratis, hurtigt at sætte op og opdaterer automatisk dit website, når du pusher ændringer til GitHub. Samtidig viser du, at du arbejder med Git og GitHub.

Her er en række eksempler på portfolioer, der er deployet på en `github.io`-adresse:

- [stinelock.github.io](https://stinelock.github.io/)
- [sofienholm.github.io](https://sofienholm.github.io/)
- [runedrummer81.github.io](https://runedrummer81.github.io/)
- [martinlpilgaard.github.io](https://martinlpilgaard.github.io/)
- [anker-sand.github.io](https://anker-sand.github.io/)
- [eaa24fnie.github.io](https://eaa24fnie.github.io/)

## Før du starter

Du skal have:

- Node.js 22.22 eller nyere og `npm`
- VS Code
- GitHub Desktop eller Git i VS Code
- en GitHub-konto

Du skal ikke oprette et Vite-projekt selv. Du skal bruge templaten.

## 1. Opret dit repository fra templaten

Gå til:

[github.com/cederdorff/username.github.io](https://github.com/cederdorff/username.github.io)

Klik på:

```text
Use this template -> Create a new repository
```

![Template-repository med Use this template-menuen åben](docs/images/use-template-menu.png)

Udfyld:

- `Owner`: din egen GitHub-bruger
- `Repository name`: `[dit-github-brugernavn].github.io`
- `Visibility`: `Public`

Eksempel:

```text
race-js.github.io
```

![Opret nyt repository fra templaten](docs/images/create-repository-from-template.png)

Klik på:

```text
Create repository
```

![GitHub genererer det nye repository](docs/images/generating-repository.png)

Vigtigt:

- brug `Use this template`, ikke `Fork`
- repository-navnet skal være præcis `[dit-github-brugernavn].github.io`
- repositoryet skal være `Public`

Forkerte eksempler:

```text
portfolio
my-portfolio
race-js.github
race-js.io
username.github.io
```

Korrekt eksempel, hvis brugernavnet er `race-js`:

```text
race-js.github.io
```

## 2. Klon med GitHub Desktop

Når dit repository er oprettet:

1. Gå ind på dit nye repository på GitHub.
2. Tjek at navnet er korrekt: `[dit-github-brugernavn].github.io`.
3. Klik på den grønne `Code`-knap.
4. Vælg `Open with GitHub Desktop`.

![Open with GitHub Desktop fra dit nye repository](docs/images/open-with-github-desktop.png)

Vælg hvor projektmappen skal ligge på din computer, og klik på:

```text
Clone
```

![Klon repository i GitHub Desktop](docs/images/github-desktop-clone.png)

Åbn derefter projektet i VS Code:

```text
Open in Visual Studio Code
```

## 3. Installer projektet lokalt

Åbn terminalen i VS Code:

```text
Terminal -> New Terminal
```

Kør:

```bash
npm install
```

## 4. Start projektet lokalt

Kør:

```bash
npm run dev
```

Åbn den lokale URL i browseren. Den er typisk:

```text
http://localhost:5173
```

![VS Code med npm install og npm run dev](docs/images/vscode-install-and-dev-server.png)

![Portfolioen vist lokalt i browseren](docs/images/localhost-before-change.png)

Tjek:

```text
http://localhost:5173/
http://localhost:5173/projects
http://localhost:5173/projects/portfolio
http://localhost:5173/about
http://localhost:5173/contact
```

Stop serveren med:

```text
Ctrl + C
```

## 5. Lav en lille ændring

Start med én lille ændring, så du hurtigt kan teste deployment.

Åbn:

```text
src/pages/HomePage.jsx
```

Find:

```jsx
<h1>Hej, jeg hedder Dit Navn.</h1>
```

Ret den fx til:

```jsx
<h1>Hej, jeg hedder RACE.</h1>
```

Gem filen.

![Ret navnet i HomePage.jsx](docs/images/vscode-edit-homepage-name.png)

## 6. Test før du pusher første gang

Kør:

```bash
npm run dev
```

Åbn:

```text
http://localhost:5173/
```

Tjek at ændringen vises. Stop derefter serveren med `Ctrl + C`.

## 7. Slå GitHub Pages til

Gå til dit repository på GitHub:

```text
Settings -> Pages
```

Vælg:

```text
Source: GitHub Actions
```

## 8. Commit og push

Brug GitHub Desktop eller Source Control i VS Code.

Med GitHub Desktop:

1. Skriv en kort commit-besked, fx `Test GitHub Pages deployment`.
2. Klik på `Commit to main`.
3. Klik på `Push origin`.

Med VS Code:

1. Gå til `Source Control`.
2. Skriv en kort commit-besked, fx `Test GitHub Pages deployment`.
3. Klik på `Commit`.
4. Klik på `Sync Changes` eller `Push`.

![Commit den lille ændring i VS Code](docs/images/vscode-commit-small-change.png)

Når du pusher til `main`, starter deployment automatisk.

Se status under:

```text
Actions
```

![GitHub Actions kører deployment](docs/images/github-actions-running.png)

Når workflowet er færdigt, skal det være grønt.

![GitHub Actions er færdig uden fejl](docs/images/github-actions-success-list.png)

Du kan klikke ind på workflowet og finde deploy-linket.

![Deploy-workflow med link til den publicerede side](docs/images/github-actions-success-detail.png)

## 9. Tjek din første deploy

Åbn:

```text
https://[dit-github-brugernavn].github.io
```

Tjek at ændringen fra trin 5 er synlig online.

![Portfolioen er publiceret på GitHub Pages](docs/images/deployed-after-change.png)

Billedet viser eksemplet på `https://race-js.github.io`.

Du kan også finde den publicerede URL under:

```text
Settings -> Pages
```

![GitHub Pages viser den publicerede URL](docs/images/github-pages-settings.png)

## 10. Tilpas portfolioen

Nu kan du bruge templaten som udgangspunkt og arbejde videre i små ændringer. Test lokalt med `npm run dev`, når du ændrer noget.

Start her:

```text
src/components/Navbar.jsx
src/pages/HomePage.jsx
src/data/projects.js
src/pages/AboutPage.jsx
src/pages/ContactPage.jsx
src/index.css
index.html
```

### Husk at ændre

- `Dit Navn` i `src/components/Navbar.jsx`
- navn, intro og faglig retning i `src/pages/HomePage.jsx`
- projekter, links og billeder i `src/data/projects.js`
- tekst på `src/pages/AboutPage.jsx`
- mail, GitHub og LinkedIn på `src/pages/ContactPage.jsx`
- `<title>` og `meta name="description"` i `index.html`
- alle steder hvor der står `username`
- favicon i `public`-mappen

### Projekter

Alle projekter der vises i denne template kommer fra:

```text
src/data/projects.js
```

Hvert projekt er et objekt i listen. Du kan kopiere et eksisterende projekt, ændre indholdet eller slette det.

```js
{
  slug: "portfolio",
  title: "Portfolio",
  year: "2026",
  summary: "Kort tekst til projektkortet.",
  description: "Længere tekst til projektsiden.",
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
}
```

Felterne betyder:

- `slug`: bruges i URL'en, fx `/projects/portfolio`
- `title`: projektets titel
- `year`: årstal
- `summary`: kort tekst på projektkortet
- `description`: længere tekst på projektsiden
- `tags`: teknologier, fagord eller temaer
- `image`: billede til projektet
- `links`: links til live site, GitHub repo eller andet relevant

Brug korte slugs uden mellemrum:

```text
portfolio
todo-app
weather-app
ux-case
```

Hvis dit GitHub-brugernavn er `race-js`, skal links fx være:

```js
href: "https://race-js.github.io",
href: "https://github.com/race-js/race-js.github.io",
```

### Billeder

Læg projektbilleder i:

```text
public/
```

Eksempel:

```text
public/todo-app.webp
```

Brug billedet i `src/data/projects.js`:

```js
image: `${import.meta.env.BASE_URL}todo-app.webp`,
```

### Design

CSS'en ligger i:

```text
src/index.css
```

Her kan du ændre farver, fonte, spacing, layout, knapper og projektkort.

## 11. Ryd op i guiden

Når portfolioen virker, kan du fjerne guiden fra dit eget repository.

Åbn:

```text
README.md
```

Erstat guiden med en kort README, fx:

```md
# Min portfolio

Dette er min portfolio bygget med React, Vite og React Router.

Portfolioen ligger her:

https://[dit-github-brugernavn].github.io
```

Slet også `docs`-mappen i VS Code. Den indeholder kun billeder til denne guide.

Commit og push oprydningen.

## 12. Når du vil opdatere portfolioen

1. Ret filerne i VS Code.
2. Test lokalt med `npm run dev`.
3. Commit og push med GitHub Desktop eller VS Code.
4. GitHub Actions deployer automatisk.

## Typiske fejl

### Repositoryet har forkert navn

Hvis dit GitHub-brugernavn er `race-js`, skal repositoryet hedde:

```text
race-js.github.io
```

Ikke:

```text
portfolio
race-js.github
race-js.io
username.github.io
```

### Siden er ikke online

Tjek:

- at du har pushet til `main`
- at `Actions` er kørt færdig uden fejl
- at `Settings -> Pages -> Source` står til `GitHub Actions`
- at repositoryet er `Public`

### `npm install` viser `Unsupported engine`

Opdater Node.js og prøv igen. Projektet bruger React Router, som kræver Node.js 22.22 eller nyere.

### Et projektlink virker ikke

Tjek:

- at `slug` ikke har mellemrum
- at projektet findes i `src/data/projects.js`
- at du har skiftet `username` ud med dit eget GitHub-brugernavn i links

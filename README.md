
**Laura Lynge Nielsen**  
Multimediedesign studerende
lauralynge@gmail.com

---

# Min portfolio

Dette er min portfolio bygget med React, Vite og React Router.

Portfolioen ligger her:

https://[lauralynge].github.io
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

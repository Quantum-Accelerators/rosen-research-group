# Rosen Research Group

Astro-based website for the Rosen Research Group at Princeton University.

## Local development

```sh
npm install
npm run dev
```

The local preview is available at `http://localhost:4321`.

## Editing content

Routine site content is stored as individual Markdown files under `src/content/`:

- `news/` — one file per news item; the article text goes below the frontmatter
- `members/` — one file per group member; biographical text goes below the frontmatter
- `publications/` — one file per publication, numbered to match the publication list

Edit the values between the `---` lines and, where applicable, the Markdown text beneath them. The `order` field controls the display order for news and members. Publication files use `section: "submitted"` or `section: "published"`.

## Private GitHub preview

Authorized collaborators can preview the site without publishing it:

1. Open this repository on GitHub.
2. Select **Code**, then **Codespaces**.
3. Select **Create codespace on main**.
4. Wait for setup to finish. The private website preview opens automatically.

The preview uses port 4321 and remains private to the person who created the Codespace. Each collaborator can create their own preview from the private repository.

## Production build

```sh
npm run build
```

The static site is generated in `dist/`.

## Publishing

The repository is private and the website is not currently configured for public deployment. GitHub Pages should remain disabled until the production launch is approved.

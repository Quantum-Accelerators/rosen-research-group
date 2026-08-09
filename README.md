# Rosen Research Group

Astro-based website for the Rosen Research Group at Princeton University.

## Local development

```sh
npm install
npm run dev
```

The local preview is available at `http://localhost:4321`.

## Editing content

Page copy is stored as Markdown under `src/content/`:

- `pages/` — home, research, teaching, software, handbook, positions, Prof. Rosen, and shared header/footer content
- `opportunities/` — graduate, postdoctoral, and undergraduate position information

Structured records remain in JSON under `src/data/`: `publications.json`, `news.json`, and `members.json`.

Edit Markdown values between the `---` lines and, where applicable, the text beneath them. Edit publications, news items, and member records directly in their JSON files.

For ordinary content updates, you should not need to edit any `.astro` file.

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

## Automated testing

GitHub Actions runs `npm ci` and a complete production build with the latest Node.js release for every pull request, including Dependabot updates. A dependency pull request should not be merged unless the build check passes. Astro 7 requires Node.js 22.12 or newer.

Each successful run includes a `built-website` artifact containing the generated `dist/` directory. Open the workflow run on GitHub and download it from the **Artifacts** section. For an interactive private browser preview, use the repository’s Codespaces configuration.

## Publishing

The repository is private and the website is not currently configured for public deployment. GitHub Pages should remain disabled until the production launch is approved.

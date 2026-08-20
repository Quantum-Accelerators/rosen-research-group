# Rosen Research Group

Website for the Rosen Research Group in Princeton University’s Department of Chemical and Biological Engineering.

[View the website](https://quantum-accelerators.github.io/rosen-research-group/)

## Development

The site uses [Astro](https://astro.build/) and requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

The development server is available at `http://localhost:4321/rosen-research-group/` and reloads when files change.

To test the production site locally:

```sh
npm run build
npm run preview
```

The production preview uses the same `/rosen-research-group/` base path. The generated site is written to `dist/`.

## Content

Most updates do not require editing Astro components:

- `src/content/pages/` contains page copy and shared site settings.
- `src/content/opportunities/` contains graduate, postdoctoral, and undergraduate opportunities.
- `src/data/members.json` contains group-member profiles.
- `src/data/publications.json` contains publications.
- `src/data/news.json` contains news items.
- `public/` contains images and downloadable documents.

Run `npm run build` after editing content to catch invalid data, broken imports, and rendering errors.

### Visual content editor

The repository includes a Pages CMS configuration in `.pages.yml`. Visit the site's `/admin/` page or open [Pages CMS](https://app.pagescms.org/), sign in with GitHub, and select `Quantum-Accelerators/rosen-research-group`.

The editor covers page copy, group members, news, publications, opportunities, navigation, images, and documents. Saving in the CMS creates a Git commit; the existing GitHub Actions workflow validates and deploys the updated Astro site.

## Pull requests and previews

GitHub Actions builds every pull request and uploads the generated `dist/` directory as a `built-website` artifact. For an interactive branch preview, create a GitHub Codespace from the branch and open its forwarded port 4321.

## Deployment

Merges to `main` trigger `.github/workflows/deploy-pages.yml`, which builds the site and deploys it to GitHub Pages. The production build automatically rewrites root-relative links for the repository’s `/rosen-research-group/` base path.


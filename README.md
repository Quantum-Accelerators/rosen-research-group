# Rosen Research Group

Astro-based website for the Rosen Research Group at Princeton University.

## Local development

Install Node.js 22.12 or newer and npm. From the repository root, install the exact dependency versions recorded in `package-lock.json` and start Astro's development server:

```sh
npm ci
npm run dev
```

Open `http://localhost:4321` in a browser. The development server updates the page as files are edited. Stop it with `Ctrl+C`.

To test the production build locally:

```sh
npm run build
npm run preview
```

The production preview also opens at `http://localhost:4321` by default. The generated static site is stored in `dist/`.

## Editing content

Page copy is stored as Markdown under `src/content/`:

- `pages/` — home, research, teaching, software, handbook, positions, Prof. Rosen, and shared header/footer content
- `opportunities/` — graduate, postdoctoral, and undergraduate position information

Structured records remain in JSON under `src/data/`: `publications.json`, `news.json`, and `members.json`.

Edit Markdown values between the `---` lines and, where applicable, the text beneath them. Edit publications, news items, and member records directly in their JSON files.

For ordinary content updates, you should not need to edit any `.astro` file.

## Previewing a branch on GitHub

Authorized collaborators can use GitHub Codespaces to view any branch without publishing the website:

1. Open the branch or pull request to preview on GitHub.
2. Select **Code** and then **Codespaces**.
3. Select the **…** menu and **New with options** if you need to choose a branch; otherwise select **Create codespace** from the branch page.
4. Confirm the desired branch and create the Codespace.
5. Wait for setup to finish. Dependencies are installed with `npm ci`, the development server starts automatically, and the forwarded port 4321 preview should open.
6. If the preview does not open, select the **Ports** tab in the Codespace, find port **4321**, and select **Open in Browser**.

The forwarded preview remains private unless its port visibility is deliberately changed. Each collaborator can create an independent preview from the private repository.

## Automated testing

GitHub Actions runs `npm ci` and a complete production build with the latest Node.js release for every pull request, including Dependabot updates. A dependency pull request should not be merged unless the build check passes. Astro 7 requires Node.js 22.12 or newer.

Each successful run includes a `built-website` artifact containing the generated `dist/` directory:

1. Open the repository's **Actions** tab on GitHub.
2. Open the relevant **Website CI** run for the branch or pull request.
3. Download **built-website** from the **Artifacts** section.

The artifact contains static files rather than a hosted interactive preview. Use Codespaces for browser-based review.

## Publishing

The repository is private and the website is not currently configured for public deployment. GitHub Pages should remain disabled until the production launch is approved.

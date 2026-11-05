# Innovative Print House

A standalone React + TypeScript application built with Vite and Tailwind CSS.

## Run locally

Use Node.js 22.12+ or Node.js 24. From this folder, run:

```sh
npm install
npm run dev
```

Open http://localhost:5173. These commands work in Windows PowerShell.
The website does not require a database or API server.

## Production build

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`. Configure your static host to
serve `index.html` for application routes such as `/works`.

## Project layout

- `src/`: React pages, components, hooks, and styles.
- `public/`: static images and favicon.
- `attached_assets/`: original imported brand assets.
- `legacy/`: preserved workspace, API, database, and Replit setup. These files
  are not used by the standalone app or its install/build commands.

The existing UI, routing, animations, gallery, and WhatsApp links are retained.
Run `npm run typecheck` to check TypeScript independently.

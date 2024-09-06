<p align="center">
  <img src="https://github.com/user-attachments/assets/7705a8a0-5888-4494-a8aa-8c494c08cc8b" alt="Sveltesse - Opinionated Vite Starter Template" width="600"/>
</p>

<p align="center">
  Mocking up web app with <b>Sveltesse</b><sup><em>(speed)</em></sup>
</p>

<br>

> **Note**: This template is highly inspired by [Vitesse](https://github.com/antfu-collective/vitesse) for Vue

<br>

##  Features

- ⚡️ [SvelteKit](https://svelte.dev), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)

- 🗂 [Easy routing](./src/routes)

- 📦 [Components](./src/components)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./src/lib/i18n)

- 🗒 [Markdown Support](https://github.com/pngwn/MDsveX)

- 🦾 TypeScript, of course

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [VS Code Extensions](./.vscode/extensions.json)
    - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
    - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Try it now!

> Sveltesse requires Node >=14.18

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/vyntrix/sveltesse/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit vyntrix/sveltesse my-sveltesse-app
cd my-sveltesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `config.ts`
- [ ] Change the favicon in `static`
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:5173

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

and you will see the generated file in `build` that ready to be served.

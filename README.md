## Portfolio/CV

## 🛠️ Stack & Tech

- [**Astro**](https://astro.build/) - The web framework for content-driven websites.
- [**React**](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with syntax for types.
- [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework.
- [**Hotkeypad**](https://github.com/jesubohr/hotkeypad) - Lightweight keyboard shortcut interface for your website.
- [**React GitHub Calendar**](https://github.com/grubersjoe/react-github-calendar) - A React component to display a GitHub contributions calendar.

## 🚀 Getting Started

### Add Your Content:

Edit the `cv.json` file to create your own printable Portfolio/CV.

### Install Dependencies:

```bash
bun install
```

### Fetch your Avatar & Generate site-images from GitHub

Copy .env.example to .env and fill in the details.

Run:

```bash
bun src/scripts/generate-favicons.ts
```

### Launch the Development Server:

```bash
bun dev
```

Open [**http://localhost:4321**](http://localhost:4321/) in your browser to view the result 🚀

### Previewing the built version of the site

#### local-only:

```bash
bun serve
```

#### via cloudflare tunnel:

```bash
bun serve:public
```

---

Based on https://github.com/Smilesharks/dev-portfolio

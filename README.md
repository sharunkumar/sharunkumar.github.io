## Print-friendly portfolio CV

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The next-gen web framework.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with type syntax.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Dropdown menu with keyboard shortcuts made in pure JavaScript.

## 🚀 Getting Started

### Add Your Content:

Edit the `cv.json` file to create your own printable Portfolio/CV.

### Fetch your avatar & generate site-images from Github

Copy .env.example to .env and fill in the details.

Run:

```bash
bun src/scripts/generate-favicons.ts
```

### Launch the Development Server:

```bash
# Enjoy the results
bun install
bun dev
```

1. Open [**http://localhost:4321**](http://localhost:4321/) in your browser to view the result 🚀

### 4. Customisable colours:

Change the data-theme of `cv.json` and choose one of the colour themes defined in theme.css, red, blue, green, cyber and default, with its variants in dark mode, or create your own.

## 🧞 Commands

|     | Command         | Action                                                         |
| :-- | :-------------- | :------------------------------------------------------------- |
| ⚙️  | `dev` o `start` | Launches a local development server at `localhost:4321`.       |
| ⚙️  | `build`         | Checks for errors and creates a production build in `./dist/`. |
| ⚙️  | `preview`       | Local preview at `localhost:4321`                              |

Based on https://github.com/Smilesharks/dev-portfolio

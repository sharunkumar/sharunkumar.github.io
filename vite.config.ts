import { defineConfig } from "vite-plus";

const ignorePatterns = [
  "**/dist/**",
  "**/.astro/**",
  "**/node_modules/**",
  "**/*.astro",
];

export default defineConfig({
  fmt: {
    ignorePatterns,
    semi: true,
    singleQuote: false,
    sortPackageJson: true,
  },
  lint: {
    ignorePatterns,
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});

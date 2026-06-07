import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: { port: 4322, host: true },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    ssr: { noExternal: ["@next/shared"] },
  },
});

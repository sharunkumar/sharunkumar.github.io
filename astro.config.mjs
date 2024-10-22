import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { readFileSync } from "fs";

const CNAME = readFileSync("CNAME", "utf8");

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: `https://${CNAME}`,
});
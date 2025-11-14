// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://drerrath.github.io",
  base: "/vanitas-university",
  vite: {
    plugins: [tailwindcss()],
  },
});

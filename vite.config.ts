import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/dentistry-non-profit/",
  plugins: [react()],
});

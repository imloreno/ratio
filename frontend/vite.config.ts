import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@router": "/src/router",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@interfaces": "/src/interfaces",
      "@styles": "/src/styles",
      "@assets": "/src/assets",
      "@layouts": "/src/layouts",
      "@features": "/src/features",
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["4e66-94-158-58-147.ngrok-free.app"], // ⬅️ Shu yerda ngrok hostini ruxsat bering
  },
});

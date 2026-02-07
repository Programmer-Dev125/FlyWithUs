import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve:{
    alias:{
      "@custom": path.resolve(__dirname, "src/components/custom"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@store": path.resolve(__dirname, "src/store"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@admin": path.resolve(__dirname, "src/pages/admin/pages"),
      "@dash": path.resolve(__dirname, "src/pages/admin/pages/dashboard")
    }
  }
})

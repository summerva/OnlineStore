import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/todo_react/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),  // импорты @
    }
  },
  // server: {
  //   historyApiFallback: true,  // /product/1 в адресной строке
  // }
}));

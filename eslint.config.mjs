import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node, // Usa globals.node si trabajas con Node.js
      sourceType: "module", // Si usas módulos ES (import/export)
    },
    rules: {
      eqeqeq: "error", // Exige el uso de '===' y '!=='
      "no-trailing-spaces": "error", // No permite espacios al final de una línea
      "object-curly-spacing": ["error", "always"], // Exige espacio dentro de las llaves en objetos
      "arrow-spacing": ["error", { before: true, after: true }], // Exige espacio alrededor de los '=>'
      "no-console": 0, // Desactiva la advertencia sobre el uso de 'console'
      // Aquí puedes agregar más reglas si lo deseas
    },
  },
  {
    ignores: ["node_modules/", "dist/"], // Ignorar carpetas node_modules y dist
  },
]);

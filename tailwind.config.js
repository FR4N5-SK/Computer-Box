/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        negro: "#000807",
        blanco: "#FFFFFF",
        "cool-gray": "#A2A3BB",
        "tropical-indigo": "#9395D3",
        "periwinkle": "#B3B7EE",
        gris: "#D4D4D4"
      },
      fontFamily: {
        Trocchi: ["Trocchi", "serif"],
        "Open-Sans": ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}


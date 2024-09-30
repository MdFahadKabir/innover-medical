/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.sans],
        "geist-sans": ["var(--font-geist-sans)", ...fontFamily.sans],
        "geist-mono": ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        "aqua-400": "#0C4E6E",
        cugray: "#666D80",
        cublue: "#0C4E6E",
        cusky: "#33CFFF",
        "cusky-light": "#EFFEFA",
        "cupink-light": "#FFF6E0",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

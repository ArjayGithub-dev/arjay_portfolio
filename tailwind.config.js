/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ["./index.html", "./src/**/*.{js,jsx}"],
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: { 
      colors: {
        white: "#FFFFFF", 
        black: "#292929",
        blue: "#007BFF",
        gray: "#939395",
        dark: "#171c28", // New color for dark mode
      },
      fontFamily: {
        inter: ["Inter", "Poppins"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('taos/plugin')
  ],
};

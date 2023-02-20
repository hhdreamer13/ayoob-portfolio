/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: '"Fira Code"',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/colors/themes")["[data-theme=night]"],
          ".color-primary": {
            color: "#94a3b8",
          },
          ".bg-base-light": {
            background: "#112240",
          },
        },
        pastel: {
          ...require("daisyui/src/colors/themes")["[data-theme=pastel]"],
          ".color-primary": {
            color: "#ffffff",
          },
          ".bg-base-light": {
            background: "#112240",
          },
        },
      },
    ],
  },
};

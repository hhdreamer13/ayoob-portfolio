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
          ".prefix-color": {
            color: "#a2a6a8",
          },
          ".bg-base-light": {
            background: "#112240",
          },
        },
        dracula: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          ".prefix-color": {
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

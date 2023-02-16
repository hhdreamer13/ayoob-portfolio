/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/colors/themes")["[data-theme=night]"],
          primary: "#1C4E80",
          ".text-color": {
            color: "#94a3b8",
          },
        },
        dracula: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          ".text-color": {
            color: "#ffffff",
          },
        },
      },
    ],
  },
};

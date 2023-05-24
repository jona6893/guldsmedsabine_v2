/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        italianno: ["Italianno"],
        opensans: ["Open sans"],
      },
      colors: {
        offWhite: "#E8DFD4",
        gold: {
          light: "#AF9075",
          dark: "#6d5948",
        },
        grey: {
          light: "#1c1c21",
          dark: "#16161a",
          darker: "#0F0F11",
        },
      },
      backgroundSize: {
        str: "40%",
        "str-to": "70%",
        "str-tre": "90%",
      },
      backgroundPosition: {
        "position-et": "150% 30%",
        "position-to": "150% 30%",
        "position-tre": "100% 50%",
      },
    },
  },
  plugins: [],
};

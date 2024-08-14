/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "heading": "#FF810D",
        "footer": "#1A1818",
        "secondary": "#0D7EE5",
        "green": "#11D6F1",
        "red":"#FA2525",
        "blue-dark":"#3B1DF5",
        "blue-light":"#0D7EE5",
        "purple":"#F20895"
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
}
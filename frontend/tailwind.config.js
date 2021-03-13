module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class",
  theme: {
    extend: {
      minHeight: {
        navigation: "15vh",
        footer: "30vh",
      },
      colors: {
        'green-neon-light': '#24CA85',
        'green-neon-light-hovered': '#13d9a0',
        'green-neon-dark': '#F2F4E8',
        'green-dark': '#013A51',
        'green-dark-subtile': '#0C4B58',
        'green-light': '#04C790',
        'white-dark': '#F2F4E8',
        'white-light': '#FBFCF5'
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        roboto: ["Roboto"],
        arvo: ["Arvo"],
        oswald: ["Oswald"],
        mulish: ["Mulish"],
      },
      screens: {
        "max-xl": { max: "1440px" },
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "425px" },
        "max-xs": { max: "320px" },
      },
    },
  },
  variants: {
    extend: {
    }
  },
  plugins: [
    require("@tailwindcss/forms"), 
    require("@tailwindcss/typography"),
    require("kutty")
  ]  
};

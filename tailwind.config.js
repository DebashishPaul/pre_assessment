module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bg: {
        primary: "#FFFBEF",
        white: "#ffffff",
        semiwhite: "rgba(255, 255, 255, 0.5)",
        semiblack: "rgba(42, 34, 14, 0.45)",
        border: "#DCDCDC	",
        warning: "#eddb0e",
      },
      btn: {
        primary: "#376576",
        secondary: "#4E90A8",
        base: "#FFFBEF",
        warning: "#FEE29A",
        border: "#29210d73",
        pink: "#FE9A9A"
      },
      txt: {
        primary: "#2A220E",
        secondary: "#FFFBEF",
        hint: "#868686",
        black: "#000000",
        dotted: "#d4d4d4"
      },
    },
    extend: {
      backgroundImage: {
        bgimage: "url('https://www.candotours.com/wp-content/uploads/2019/05/Airport-Transfers-1-400x400.jpg')",
      },
      fontFamily: {
        sans: ["Poppins"],
        serif: ["Poppins"],
      },
      letterSpacing: {
        primary: "0.03em",
      },
      lineHeight: {
        small: "17px",
        medium: "25px",
        large: "38px",
        extraLarge: "56px",
        extraExLarge: "84px",
      },
    },
  },
  plugins: [],
};

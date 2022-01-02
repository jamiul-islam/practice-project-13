module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        underline: "url('/src/assets/underline.png')",
        underlineSecond: "url('/src/assets/secondUnderline.png')",
        underlineThird: "url('/src/assets/underlineThird.png')",
      },
    },
  },
  plugins: [],
};

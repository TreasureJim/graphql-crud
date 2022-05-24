module.exports = {
  content: [
    "./pages/**/*.{tsx, ts, js, jsx}",
    "./components/**/*.{tsx, ts, js, jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Darker Grotesque", "sans-serif"],
      },
      fontSize: {
        base: ["1.25rem", "30px"],
      },
    },
  },
};

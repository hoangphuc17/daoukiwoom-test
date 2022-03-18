const Colors = {
  "k-darkblue": "#181949",
  "k-lightblue": "#CFE5FF",
  "k-lighterblue": "#F3F9FF",
  "k-lightpink": "#FFD1E8",
  "k-pink": "#E6367E",
  "k-done": "#666",
  "k-secondtext": "#374754",
  "k-lightgray": "#f4f4f4",
};
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "primary-regular": "NotoSans-Regular",
        "primary-bold": "NotoSans-Bold",
        "secondary-bold": "Manrope-Bold",
        "third-bold": "Roboto-Bold",
      },
      colors: {
        ...Colors,
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "n-golden": "#daa520",
        "n-gray-text": "#BBC1C6",
      },
      width: {
        25: "6.25rem",
        87.5: "21.875rem",
        100: "25rem",
      },
      height: {
        21.5: "5.375rem",
        25: "6.25rem",
        62.5: "15.626rem",
        87.5: "21.875rem",
        100: "25rem",
        125: "31.25rem",
      },
      borderRadius: {
        100: "100%",
      },
      gridTemplateColumns: {
        "n-3fr": "repeat(1fr 1fr 1fr)",
        25: "repeat(auto-fill,minmax(25rem,1fr))",
      },
    },
  },
  plugins: [],
};

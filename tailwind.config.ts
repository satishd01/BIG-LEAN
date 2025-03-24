module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-grey": "#230a06",
        "light-grey": "#F9F9F9",
      },
      fontFamily: {
        customFont: ['"Montserrat"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};

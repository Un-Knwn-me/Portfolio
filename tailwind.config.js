/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kapakana: ["kapakana", "sans-serif"],
        michroma: ["michroma", "sans-serif"],
        redhatregular: ["redhatregular", "sans-serif"],
        redhatmedium: ["redhatmedium", "sans-serif"],
        poppinslight: ["poppins-Light", "sans-serif"],
        poppinsregular: ["poppins-Regular", "sans-serif"]
      },
      textUnderlineOffset: {
        14: '14px',
        26: '26px',
        24: '24px'
      },
    },
  },
  plugins: [],
}


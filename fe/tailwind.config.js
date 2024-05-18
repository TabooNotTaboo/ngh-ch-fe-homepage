/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        manjari: ['Manjari', 'sans-serif'],
      },
      colors: {
        gray_1: "#E8ECEF",
        gray_2: "#6C7275",

        green_1: "#CEF53D",

        pink_1: "#FF78C5",
        customGreen: '#CFF53E',
        customBlue: '#4848FF',
      },
      fontSize: {
        '12px': '12px',
        '14px':' 14px',
        '16px': '16px',
        '25px': '25px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
      },
      lineHeight: {
        'tight': '1',
      },
      height: {
        '100px': '100px',
      }
    },
  },
  plugins: [],
};

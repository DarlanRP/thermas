/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {'21px': '21px',
    },
      colors: {
        'orange' : '#F76707',
        'azulClaro': '#74DCFF',
      },
      fontFamily: {
        body: ['Fredoka']
      },
      spacing: {
        '475px': '29rem',
        '680px' : '42rem',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,html}','./src/components/**/*.{js,jsx}','*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat": ['Montserrat', 'sans-serif']
      },
      colors: {
        n1: '#111826',
        n150: '#11182675',
        n175: '#111826ee',
        n2: '#1C3973',
        n3: '#a8820b',
        n4: '#f0b90b',
        n5: '#e3c994',
        n6: '#f2f2f2',
      },
    },
  },
  plugins: [],
}


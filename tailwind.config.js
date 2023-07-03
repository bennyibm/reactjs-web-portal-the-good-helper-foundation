/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        primary : '#ef7d00',
        secondary : '#0b07a2',
        paragraph : '#bcbcbc',
        'primary-deep' : '#FF4747',
        "secondary-deep" : "#14063F",
      },
    },
  },
  plugins: [],
}


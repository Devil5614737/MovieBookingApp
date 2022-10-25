/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "dark":"#0D0D18",
        "overlay":"rgba(0,0,0,.8)"
      },
      backgroundImage:{
        'login-bg': "url('/loginBg.jpg')",
      }
    },
  },
  plugins: [],
}

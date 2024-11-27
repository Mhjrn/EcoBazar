/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Regular':'Poppins',
        'SemiBold':'Poppins-SemiBold',
        'Medium':'Poppins-Medium',
        'Bold':'Poppins-Bold',
        'ExtraBold':'Poppins-ExtraBold',
        'ExtraLight':'Poppins-ExtraLight',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'general-sans': ['"General Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


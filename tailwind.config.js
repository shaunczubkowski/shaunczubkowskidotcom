/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Dark gray-blue
        secondary: '#61dafb', // Sky blue
        accent: '#ff6b6b', // Coral red
        background: '#282c34', // Dark slate gray
        text: '#ffffff', // White,
        lightBackground: '#ffffff', // White 
      },
      animation: {
        slideLeft: "slideLeft 1s forwards",
        slideRight: "slideRight 1s forwards"
      },
      keyframes: {
        slideLeft: {
          '100%': { 'left': '0' }
        },
        slideRight: {
          '100%': { 'left': '100%' }
        }
      },
    }
  },
  plugins: [],
}


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
      }
    }
  },
  plugins: [],
}


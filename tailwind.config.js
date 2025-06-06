/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1b2a41',
          light: '#3a5068',
          dark: '#0d1a2d',
        },
        secondary: {
          DEFAULT: '#ffffff',
          dark: '#f0f0f0',
          light: '#cccccc',
        },
        accent: {
          green: '#2ecc71',
          red: '#e74c3c',
        },
        background: {
          light: '#f4f7f6',
          dark: '#0d1a2d',
        },
        text: {
          light: '#171717',
          dark: '#ffffff',
          secondary: {
             light: '#555',
             dark: '#cccccc',
          }
        }
      },
    },
  },
  plugins: [],
}


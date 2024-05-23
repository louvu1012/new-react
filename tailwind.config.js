import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6F6F6',
        primary: '#FC0D46',
        black: '#121212',
        gray: '#6F7789',
        icon: '#EE684A',
      },
    },
    screens: {
      ...defaultTheme.screens,
      mobile: { max: "991px" },
      md: { max: "767px" },
      xs: { max: "510px" },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
}


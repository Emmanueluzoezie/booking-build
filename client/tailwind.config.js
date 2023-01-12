/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1124px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "custom-name": "url(https://cdn.offshorewind.biz/wp-content/uploads/sites/6/2021/03/03113012/bitcoin-1813503_960_720.jpg)",
      },
      backgroundSize: {
        "custom-name": "cover"
      },
      backgroundPosition: {
        "custom-name": "center"
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        customgrn: "#1F7882",
        customyellow: "#FFD22E",
      },
      backgroundImage: {
        banner: "url('/public/img/produk/banner.jpg')",
      },
    },
  },
  plugins: [],
};

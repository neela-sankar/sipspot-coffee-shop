/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--font-bodoni_moda)",
      secondary: "var(--font-merriweather)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C19A6B"
        },
        secondary: {
          DEFAULT: "#3E2723"
        },
        third: {
          DEFAULT: "#B2AC88"
        },
        accent: {
          DEFAULT: "#FFFDD0"
        }
      },
      backgroundImage: {
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours/bg.png')",
        footer: "url('/assets/footer/bg.png')",
      },
    },
  },
  plugins: [],
};

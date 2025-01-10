/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lilla: "#732282",
        darkblue: "#6188C1",
        blue: "#e4f7ff",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      height: {
        20: "20px",
        25: "35px",
        30: "30px",
        50: "50px",
        75: "75px",
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        350: "350px",
        400: "400px",
        450: "450px",
        500: "500px",
      },
      width: {
        20: "20px",
        25: "35px",
        50: "50px",
        75: "75px",
        90: "90px",
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        700: "700px",
      },
      borderRadius: {
        12: "12px",
        15: "15px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        xs: "400px",
        sm: "680px",
        md: "888px",
        lg: "1284px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        motion: "motion 30s linear infinite",
      },
      keyframes: {
        motion: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      spacing: {
        30: "7.5rem", // Tilføjer top-30 som 7.5rem
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

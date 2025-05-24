import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        honey: {
          light: "#FFC94D", // Light honey
          DEFAULT: "#F2A900", // Golden honey
          amber: "#E09900", // Amber honey
          dark: "#B27300", // Dark honey
          brown: "#704214", // Brown honey
        },
        nature: {
          green: "#4D7C0F", // Forest green
          leaf: "#84CC16", // Leaf green
          cream: "#FEF3C7", // Cream color
        }
      },
      fontFamily: {
        display: ['var(--font-geist-sans)', 'sans-serif'],
        body: ['var(--font-geist-sans)', 'sans-serif'],
      },
      animation: {
        'bee-hover': 'beeHover 2s infinite ease-in-out',
        'bee-trail': 'beeTrail 1s infinite ease-out',
      },
      keyframes: {
        beeHover: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        beeTrail: {
          '0%': { opacity: '0.6', transform: 'scale(1) translate(0px, 0px)' },
          '100%': { opacity: '0', transform: 'scale(0) translate(-20px, 10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

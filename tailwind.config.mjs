/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#f7f6f7",
        black: "#3D3D3B",
        red: "#E8501D",
        purple: "#9D1D80",
        green: "#19A538",
        green_two: "#DCDD26",
        blue: "#246493",
      },
    },
  },
  plugins: [],
};

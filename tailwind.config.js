/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "brand": "#00B3FF",
        "bg-darker": "#848484",
        "bg-lighter": "#f1f1f1"
      }
    }
  },
  plugins: []
};
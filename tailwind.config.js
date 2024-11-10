/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
      },
      colors: {
        "white-78": "rgba(255, 255, 255, 0.78)",
        'custom-orange': '#ffa500',
      },
    },
  },
  plugins: [],
};

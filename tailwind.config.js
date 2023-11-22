/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "#81A1C1",
        hover: "#58D5BA",
        ring: "#277F70",
        button: "#24292F]",
        danger: "#e3342f",
        card: "#0F1B1B",
        background: "#262a31",
        darktext: "#1d1d1d",
      },
      borderColor: {
        primary: "#ADF0D4",
        secondary: "#81A1C1",
        danger: "#e3342f",
      },
      backgroundColor: {
        javascript: "#F7DF1E",
        typescript: "#3178C6",
        react: "#61DBFB",
        vue: "#41B883",
        angular: "#DD0031",
        php: "#777BB4",
        docker: "#2496ED",
        css: "#2965F1",
        html: "#E44D26",
        flutter: "#02569B",
        swift: "#FFAC45",
        java: "#007396",
      },
      boxShadow: {
        neumorphic:
          "5px 5px 10px rgba(0, 0, 0, 0.25), -2px -2px 10px rgba(255, 255, 255, 0.05)",
        "inner-neumorphic":
          "inset 5px 5px 10px rgba(0, 0, 0, 0.25), inset -4px -4px 15px rgba(255, 255, 255, 0.05)",
        "light-inner-neumorphic":
          "inset 5px 5px 10px rgba(0, 0, 0, 0.15), inset -4px -4px 15px rgba(255, 255, 255, 0.03)",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.066rem",
        "2xl": "1.421rem",
        "3xl": "1.894rem",
        "4xl": "2.525rem",
        "5xl": "3.366rem",
      },
      fontFamily: {
        heading: ["Fragment Mono", "sans-serif"],
        body: ["Fragment Mono", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [forms],
};

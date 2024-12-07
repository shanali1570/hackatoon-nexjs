import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], // Use CSS variable for font
      },
      screens: {
        xs: "480px", // Custom `xs` breakpoint for smaller devices
        sm: "640px", // Default small devices breakpoint
        md: "768px", // Default medium devices breakpoint
        lg: "1024px", // Default large devices breakpoint
        xl: "1280px", // Default extra-large devices breakpoint
      },
    },
  },
  plugins: [],
};
export default config;

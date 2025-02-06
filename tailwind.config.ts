import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        text: "var(--text-color)",
        primary: "var(--color-primary)",
        borderOnBg: "var(--color-border-on-bg-default)",
        borderPrimary: "var(--color-border-primary)"
      },
      maxWidth: {
        "8xl": "90rem",
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        borderOnBg: 'var(--color-border-on-bg-default)',
        primary: 'var(--color-primary)',
        cardBg: 'var(--color-card-background)',
        btnMain: 'var(--color-button-main)',
        btnSecondary: 'var(--color-button-secondary)',
      },
    },
  },
  plugins: [],
} satisfies Config;

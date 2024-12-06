import type { Config } from 'tailwindcss'
 
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffff", // Gibraltar Sea
          "secondary": "#B39C3E", // Golden Olive
          "accent": "#2576a9",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "corporate",
    ],
  },
};

module.exports = config;
export default config

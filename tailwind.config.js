/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'neutral': {
        50: 'var(--text-50)',
        100: 'var(--text-100)',
        200: 'var(--text-200)',
        300: 'var(--text-300)',
        400: 'var(--text-400)',
        500: 'var(--text-500)',
        600: 'var(--text-600)',
        700: 'var(--text-700)',
        800: 'var(--text-800)',
        900: 'var(--text-900)',
        950: 'var(--text-950)',
      },
      'background': {
        50: 'var(--background-50)',
        100: 'var(--background-100)',
        200: 'var(--background-200)',
        300: 'var(--background-300)',
        400: 'var(--background-400)',
        500: 'var(--background-500)',
        600: 'var(--background-600)',
        700: 'var(--background-700)',
        800: 'var(--background-800)',
        900: 'var(--background-900)',
        950: 'var(--background-950)',
      },
     },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      height: {
        'sm-vh': '12vh', // 12% of the viewport height for 'sm'
        'xl-vh': '15vh', // 15% of the viewport height for 'xl'
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

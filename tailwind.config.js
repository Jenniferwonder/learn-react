/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        14: '14px',
      },
      spacing: {
        4.5: '18px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-invert-headings': theme('colors.white.dark'),
            '--tw-prose-invert-links': theme('colors.white.dark'),
            'h1': { fontSize: '40px', marginBottom: '0.5rem', marginTop: 0 },
            'h2': { fontSize: '32px', marginBottom: '0.5rem', marginTop: 0 },
            'h3': { fontSize: '28px', marginBottom: '0.5rem', marginTop: 0 },
            'h4': { fontSize: '24px', marginBottom: '0.5rem', marginTop: 0 },
            'h5': { fontSize: '20px', marginBottom: '0.5rem', marginTop: 0 },
            'h6': { fontSize: '16px', marginBottom: '0.5rem', marginTop: 0 },
            'p': { marginBottom: '0.5rem' },
            'li': { margin: 0 },
            'img': { margin: 0 },
          },
        },
      }),
      boxShadow: {
        '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern': 'url(\'https://i.ibb.co/MkvLDfb/Rectangle-4389.png\')',
      },
      colors: {
        primary: {
          'DEFAULT': '#4361ee',
          'light': '#eaf1ff',
          'dark-light': 'rgba(67,97,238,.15)',
        },
        secondary: {
          'DEFAULT': '#805dca',
          'light': '#ebe4f7',
          'dark-light': 'rgb(128 93 202 / 15%)',
        },
        success: {
          'DEFAULT': '#00ab55',
          'light': '#ddf5f0',
          'dark-light': 'rgba(0,171,85,.15)',
        },
        danger: {
          'DEFAULT': '#e7515a',
          'light': '#fff5f5',
          'dark-light': 'rgba(231,81,90,.15)',
        },
        warning: {
          'DEFAULT': '#e2a03f',
          'light': '#fff9ed',
          'dark-light': 'rgba(226,160,63,.15)',
        },
        info: {
          'DEFAULT': '#2196f3',
          'light': '#e7f7ff',
          'dark-light': 'rgba(33,150,243,.15)',
        },
        dark: {
          'DEFAULT': '#3b3f5c',
          'light': '#eaeaec',
          'dark-light': 'rgba(59,63,92,.15)',
        },
        black: {
          'DEFAULT': '#0e1726',
          'light': '#e3e4eb',
          'dark-light': 'rgba(14,23,38,.15)',
        },
        white: {
          DEFAULT: '#ffffff',
          light: '#e0e6ed',
          dark: '#888ea8',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    // preflight: false,
  },
}

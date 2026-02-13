/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF4EE',
          100: '#FFE4D6',
          DEFAULT: '#FF6B35',
          dark: '#E85D2C',
          darker: '#D14F23',
          light: '#FF8F66',
        },
        accent: {
          purple: '#6B7FE8',
          green: '#10B981',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.052rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'section': ['2.441rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'primary': '0 10px 30px rgba(255, 107, 53, 0.15)',
        'primary-lg': '0 20px 40px rgba(255, 107, 53, 0.2)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(2rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-in-right': 'slideInRight 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        wood: {
          100: '#F5EBE0',
          200: '#E6D2B5',
          300: '#D4BA8A',
          400: '#C19A6B',
          500: '#A0522D',
          600: '#8B4513',
          700: '#6B3811',
          800: '#4E2A0E',
          900: '#2C1A09',
        },
        // Secondary colors
        forest: {
          100: '#E8F4E4',
          200: '#C9E4C5',
          300: '#90C98D',
          400: '#5DAE6B',
          500: '#2E8B57',
          600: '#226644',
          700: '#1A4D33',
          800: '#133324',
          900: '#0C1F15',
        },
        // Accent colors
        terracotta: {
          100: '#F9E2E2',
          200: '#F5C4C4',
          300: '#EEA6A6',
          400: '#E38888',
          500: '#CD5C5C',
          600: '#B54444',
          700: '#8E3232',
          800: '#672424',
          900: '#3F1616',
        },
        // Neutral colors
        cream: '#FFFDD0',
        parchment: '#F5F2E3',
        sand: '#E5DCC3',
        // Utility colors
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'wood-texture': "url('https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'paper-texture': "url('https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce-gentle 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(-2px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
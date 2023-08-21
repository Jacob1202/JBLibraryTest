import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDelay: {
        '5000': '5000ms',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(0,calc(var(--s)*var(--h) * -1px))' },
        },
        liMove: {
          '0%': { opacity: "1", transform: 'translate(0,0)' },
          '5%' :{opacity: "0"},
          '15%' :{opacity: "0"},
          '40%': { opacity: "1", transform: 'translate(0, calc(var(--h) * -1px))' },
          '100%': { opacity: "1", transform: 'translate(0, calc(var(--h) * -1px))' },
        },
      },
      animation: {
        move: 'move calc(var(--speed) * var(--s)) steps(var(--s)) infinite',
        liMove: 'liMove calc(var(--speed)) infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;

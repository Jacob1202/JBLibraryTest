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
      keyframes: {
        move: {
          from: { transform: 'translate(0,0)' },
          to: { transform: 'translate(0,calc(var(--s)*var(--h) * -1px))' },
        },
        liMove: {
          '0%': { opacity: "1", transform: 'translate(0,0)' },
          '10%' :{opacity: "0"},
          '20%' :{opacity: "0"},
          '40%': { opacity: "1", transform: 'translate(0, calc(var(--h) * -1px))' },
          '100%': { opacity: "1", transform: 'translate(0, calc(var(--h) * -1px))' },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: 'translateY(2px)' },
          to: { opacity: "1", transform: 'translateY(0)' },
        },
      },
      animation: {
        move: 'move calc(var(--speed) * var(--s)) steps(var(--s)) infinite',
        liMove: 'liMove calc(var(--speed)) infinite',
        slideUpAndFade: 'slideUpAndFade 600ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
} satisfies Config;

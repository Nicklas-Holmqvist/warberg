import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#f5f5f5',
      black: '#100b00',
      grey: '#BEBFC1',
    },
    extend: {
      animation: {
        bouncing: 'bouncing 1.5s ease-in-out infinite',
      },
      keyframes: {
        bouncing: {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubicBezier(0.8, 1, 1 1)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)',
            animationTimingFunction: 'cubicBezier(0,0,0.2,1)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

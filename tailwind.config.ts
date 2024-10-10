/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '549px',
      md: '849px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        'background-hero': 'url(/assets/images/bg-hero.webp)',
        'background-benefit': 'url(/assets/images/bg-benefit.webp)',
        'background-device': 'url(/assets/images/bg-device-section.webp)',
        'background-download': 'url(/assets/images/bg-download.jpg)',
        'background-tutorial': 'url(/assets/images/bg-tutorial.webp)',
        'background-blog': 'url(/assets/images/bg-blog.webp)',
      },
      colors: {
        primary: '#4600B9',
        secondary: '#0094FF',
        heading: '#000000',
        heading2: '#0C1941',
        text: '#222222',
        text2: '#0C1941',
        background: '#ffffff',
        border: '#F5F5F8',
        white: '#ffffff',
        black02: '#404963',
        error: '#b20000',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      keyframes: {
        'input-auto-focus': {
          from: { borderColor: '#b20000' },
          to: { borderColor: '#4600B9' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0px)' },
        },
        'slide-down': {
          from: { opacity: '1', transform: 'translateY(0px)' },
          to: { opacity: '0', transform: 'translateY(30px)' },
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(.3)',
          },
          '60%': {
            opacity: '1',
            transform: 'scale(1.1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'drop-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
            animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
            animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)',
          },
        },
      },
      animation: {
        'input-auto-focus': 'input-auto-focus 0.4s linear',
        'zoom-in': 'zoom-in 0.6s ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.5s linear',
        'slide-down': 'slide-down 0.5s linear',
        'drop-in': 'drop-in 0.3s ease-in-out 1',
      },
      fontSize: {
        sm: '12px',
        md: '14px',
        normal: '16px',
        lg: '20px',
        xl: '24px',
      },
      maxWidth: {
        sm: '549px',
        md: '849px',
        lg: '1024px',
        xl: '1200px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config

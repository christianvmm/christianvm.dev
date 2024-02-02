import type { Config } from 'tailwindcss'

const config: Config = {
   darkMode: 'class',
   content: [
      './content/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            xs: '300px',
            sm: '512px',
            xl: '1152px',
         },
         maxWidth: {
            s: '300px',
         },
         colors: {
            'light-zinc': 'rgb(252, 252, 252)',
         },
         boxShadow: {
            'nav-shadow':
               '0 10px 15px -3px rgb(0 0 0 / 0.02), 0 4px 6px -4px rgb(0 0 0 / 0.025)',
         },
         keyframes: {
            shake: {
               '0%': { transform: 'translateX(0)' },
               '25%': { transform: 'translateX(-4px)' },
               '75%': { transform: 'translateX(4px)' },
               '100%': { transform: 'translateX(0)' },
            },
            'infinite-scroll': {
               from: { transform: 'translateX(0)' },
               to: { transform: 'translateX(-100%)' },
            },
         },
         animation: {
            shake: 'shake 0.1s ease-in-out',
            'infinite-scroll': 'infinite-scroll 25s linear infinite',
         },
         fontFamily: {
            rounded: ['Arial Rounded', 'sans-serif'],
         },
      },
   },
}
export default config

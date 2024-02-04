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
         fontFamily: {
            sans: ['var(--font-pretendard)'],
         },
      },
   },
}
export default config

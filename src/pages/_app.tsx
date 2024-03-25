import type { AppProps } from 'next/app'
import { pretendard } from '@/fonts/pretendard'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'
import { cn } from '../utils/cn'

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <ThemeProvider
            attribute='class'
            enableSystem={true}
            defaultTheme='system'
         >
            <div
               className={cn(
                  pretendard.variable,
                  'relative font-sans selection:bg-blue-100 selection:text-blue-500 bg-light-zinc dark:text-white dark:bg-black min-h-screen dark:selection:bg-blue-900 dark:selection:text-blue-400'
               )}
            >
               <Layout>
                  <Component {...pageProps} />
               </Layout>

               <div id='root' />
            </div>
         </ThemeProvider>

         <Analytics />
      </>
   )
}

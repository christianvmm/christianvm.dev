import type { AppProps } from 'next/app'
import { Toaster } from 'sonner'
import { pretendard } from '@/fonts/pretendard'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <ThemeProvider
            attribute='class'
            enableSystem={true}
            defaultTheme='system'
         >
            <main className={pretendard.className}>
               <Layout>
                  <Toaster />
                  <Component {...pageProps} />
               </Layout>
            </main>
         </ThemeProvider>

         <Analytics />
      </>
   )
}

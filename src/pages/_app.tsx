import type { AppProps } from 'next/app'
import cn from 'classnames'
import { Toaster } from 'sonner'
import { pretendard } from '@/fonts/pretendard'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import { Layout } from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider
         attribute='class'
         enableSystem={true}
         defaultTheme='system'
      >
         <main className={cn(pretendard.className)}>
            <Layout>
               <Toaster />
               <Component {...pageProps} />
            </Layout>
         </main>
      </ThemeProvider>
   )
}

import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { AppProvider } from '@/provider'
import { cn } from '@/utils/cn'
import { pretendard } from '@/fonts/pretendard'
import { type Metadata } from 'next'
import { Layout } from '@/features/misc/components/layout'

const description = 'Personal website and blog of Christian Velez Medina.'
const appName = 'Christian Velez Medina'

export const metadata: Metadata = {
   title: {
      template: `%s · ${appName}`,
      default: `${appName}`,
   },
   metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
   description,
   openGraph: {
      title: appName,
      description,
      locale: 'es_MX',
      url: process.env.NEXT_PUBLIC_SITE_URL!,
      siteName: appName,
      type: 'website',
   },
}

export default async function RootLayout({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang='en' suppressHydrationWarning>
         <body>
            <AppProvider>
               <div
                  className={cn(
                     pretendard.variable,
                     'relative font-sans selection:bg-blue-100 selection:text-blue-500 bg-light-zinc dark:text-white dark:bg-black min-h-screen dark:selection:bg-blue-900 dark:selection:text-blue-400'
                  )}
               >
                  <Layout>{children}</Layout>

                  <div id='root' />
               </div>
            </AppProvider>

            <Analytics />
         </body>
      </html>
   )
}

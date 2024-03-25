import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div>
         <div className='flex flex-col-reverse lg:flex-col min-h-screen lg:min-h-0 justify-start'>
            <Navbar />

            <main className='w-full flex-1 px-6 pt-16 pb-6 md:pb-10 md:px-10 lg:pt-0'>
               {children}
            </main>
         </div>

         <Footer />
      </div>
   )
}

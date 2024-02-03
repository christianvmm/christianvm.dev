import { Navbar } from '@/components/Navbar'

export function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div
         id='root'
         className='relative font-sans selection:bg-blue-100 selection:text-blue-500 bg-light-zinc dark:text-white dark:bg-black min-h-screen
         dark:selection:bg-blue-900 dark:selection:text-blue-400
         '
      >
         <div className='flex flex-col-reverse lg:flex-col min-h-screen justify-start'>
            <Navbar />

            <main className='w-full flex-1 px-6 pt-16 pb-6 md:pb-10 md:px-10 lg:pt-0'>
               {children}
            </main>
         </div>
      </div>
   )
}

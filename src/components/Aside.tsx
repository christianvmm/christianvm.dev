import cn from 'classnames'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
   weight: ['400'],
   subsets: ['latin'],
})

export function Aside() {
   return (
      <aside className='hidden fixed top-0 right-0 w-12  h-screen lg:flex justify-center left-auto items-center'>
         <div className='rotate-90'>
            <h1
               className={cn(
                  roboto.className,
                  'text-[#c9c9c9] dark:text-[#737373] font-normal text-xs line-clamp-2'
               )}
            >
               Guadalajara,&nbsp;Jal.&nbsp;&nbsp;－&nbsp;&nbsp;Graceful&nbsp;pursuit&nbsp;of&nbsp;a&nbsp;superior&nbsp;self.
            </h1>
         </div>
      </aside>
   )
}

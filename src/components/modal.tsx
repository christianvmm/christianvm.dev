'use client'
import { cn } from '@/utils/cn'
import { XIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'

type ModalProps = {
   children?: React.ReactNode
   open: boolean
   onClose: () => void
}

export function Modal({ children, open, onClose }: ModalProps) {
   const menuRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      const handleClick = (event: MouseEvent) => {
         if (menuRef.current && menuRef.current === event.target) {
            onClose()
         }
      }

      if (open) {
         document.body.style.overscrollBehavior = 'none'
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overscrollBehavior = 'auto'
         document.body.style.overflow = 'auto'
      }

      document.addEventListener('click', handleClick)

      return () => {
         document.removeEventListener('click', handleClick)
      }
   }, [open, onClose])

   return (
      open && (
         <section
            className={cn(
               'fixed left-0 top-0 z-[99999] flex h-screen w-full items-center justify-center bg-zinc-900/25 dark:bg-zinc-900/20 backdrop-brightness-50',
               { 'animate-fadeSm': open }
            )}
            ref={menuRef}
         >
            <article
               className={cn(
                  'group relative mx-2 my-2 max-h-screen w-full max-w-2xl overflow-hidden rounded-3xl bg-white text-zinc-800 shadow-xl shadow-zinc-500/10 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-3xl after:border-[6px] after:border-white/50',
                  {
                     'animate-modalReveal': open,
                  }
               )}
            >
               <button
                  className='absolute right-4 top-4 z-10 rounded-full bg-white/50 p-2 text-zinc-300 dark:text-white transition-all duration-300 ease-bounce active:-rotate-12 active:scale-90 sm:-rotate-12 sm:scale-75 sm:opacity-0 sm:hover:!scale-90 sm:active:!-rotate-12 sm:active:!scale-75 sm:group-hover:rotate-0 sm:group-hover:scale-100 sm:group-hover:opacity-100'
                  onClick={() => {
                     setTimeout(() => {
                        onClose()
                     }, 1)
                  }}
               >
                  <XIcon size={22} />
               </button>
               {children}
            </article>
         </section>
      )
   )
}

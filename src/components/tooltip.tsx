import { cn } from '@/utils/cn'

export function Tooltip({
   className = '',
   position = 'top',
   title,
   children,
}: {
   title: string
   position?: 'top' | 'left' | 'right' | 'bottom'
   className?: string
   children?: React.ReactNode
}) {
   
   return (
      <>
         {children}

         <span
            role='tooltip'
            className={cn(
               'opacity-0 font-normal group-hover:opacity-100 delay-75 scale-90 group-hover:scale-100 pointer-events-none transition-all duration-150 ease-out absolute text-sm px-2 py-1 rounded-full bg-black z-[99] text-white dark:bg-white dark:text-black ',
               position === 'top'
                  ? '-top-5 group-hover:-top-6 left-[50%] translate-x-[-50%]'
                  : '',
               position === 'bottom'
                  ? '-bottom-5 group-hover:-bottom-6 left-[50%] translate-x-[-50%]'
                  : '',
               position === 'left'
                  ? 'left-5 group-hover:-left-6 top-[50%] translate-y-[-50%]'
                  : '',
               position === 'right'
                  ? 'right-5 group-hover:-right-6 top-[50%] translate-y-[-50%]'
                  : '',
               '-translate-y-3',
               className
            )}
         >
            <span
               className={cn(
                  'w-2.5 h-2.5 rounded-sm bg-black absolute scale-75 group-hover:scale-100 transition-transform duration-200 z-30 transform rotate-45 dark:bg-white ',
                  position === 'top'
                     ? '-bottom-1 left-[50%] translate-x-[-50%]'
                     : '',
                  position === 'bottom'
                     ? '-top-1 left-[50%] translate-x-[-50%]'
                     : '',
                  position === 'left'
                     ? '-right-0.5 top-[50%] translate-y-[-50%]'
                     : '',
                  position === 'right'
                     ? '-left-0.5 top-[50%] translate-y-[-50%]'
                     : ''
               )}
            />
            <span className='z-50 relative truncate'> {title} </span>
         </span>
      </>
   )
}

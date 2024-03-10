import { cn } from '@/utils/cn'

const stack = [
   {
      title: 'TypeScript',
      description: 'Programming Language',
   },
   {
      title: 'React',
      description: 'UI Library',
   },
   {
      title: 'TypeScript',
      description: 'JavaScript Backend',
   },
   {
      title: 'Next.js',
      description: 'React Framework',
   },
]

export function Stack() {
   return (
      <section>
         <h1 className='font-semibold text-xl mb-2'>Stack</h1>

         <div className='w-full flex items-center justify-center '>
            <div className='flex flex-col justify-between w-full'>
               <p className='text-sm text-[#171717] transition-all ease-out dark:text-white'>
                  I love to code using{' '}
                  <span className='font-medium'>these</span>{' '}
                  <span className='text-[#139eca] font-medium'>React</span>
               </p>

               <div className='flex  justify-center w-full  pl-10 bg-zinc-100 dark:bg-zinc-900/70 py-20'>
                  {stack.map((tech, i) => {
                     let className = ''

                     if (i === 1) {
                        className += 'mt-2 '
                     }

                     return (
                        <Card key={i} className={cn('-ml-10', className)}>
                           <CardContent
                              className={
                                 i % 2 === 0 ? '-rotate-6' : 'rotate-12'
                              }
                           >
                              <CardFooter
                                 title={tech.title}
                                 subtitle={tech.description}
                              />
                           </CardContent>
                        </Card>
                     )
                  })}
               </div>
            </div>
         </div>
      </section>
   )
}

function Card({
   className,
   children,
}: {
   children: React.ReactNode
   className?: string
}) {
   return (
      <div className={cn('group w-[100px] md:w-[140px]', className)}>
         {children}
      </div>
   )
}

function CardContent({
   className,
   children,
}: {
   children: React.ReactNode
   className?: string
}) {
   return (
      <div
         className={cn(
            'duration-250  hover:scale-110 flex h-[120px] w-[100px] flex-col items-center justify-between rounded-xl p-1 transition-all group-hover:rotate-0 group-hover:shadow-2xl md:h-[160px] md:w-[140px]',
            'bg-white dark:bg-zinc-950 shadow-xl border border-zinc-200 shadow-zinc-500/5  dark:border-zinc-900',
            className
         )}
      >
         <div className='h-4'></div>

         {children}

         <div className='absolute top-24 h-10 w-full bg-transparent md:top-36'></div>
      </div>
   )
}

function CardFooter({ title, subtitle }: { title: string; subtitle: string }) {
   return (
      <div className='w-full self-end p-2'>
         <div className='text-xs text-[#DEDEDE] dark:text-[#333333]'>
            {subtitle}
         </div>
         <div className='text-sm font-medium dark:white dark:group-hover:text-white'>
            {title}
         </div>
      </div>
   )
}


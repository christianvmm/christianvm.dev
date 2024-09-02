'use client'
import Image from 'next/image'
import { Typography } from '@/components/typography'
import { cn } from '@/utils/cn'
import { useState } from 'react'

const stack = [
   {
      name: 'TypeScript',
      description: '01',
      image: '/assets/home/typescript.svg',
   },
   {
      name: 'React',
      description: '02',
      image: '/assets/home/react.svg',
   },
   {
      name: 'Node.js',
      description: '03',
      image: '/assets/home/node.svg',
   },
   {
      name: 'Next.js',
      description: '04',
      image: '/assets/home/next.svg',
   },
]

const colors: Record<string, string> = {
   ['TypeScript']: 'text-[#3070C6]',
   ['React']: 'text-[#149ECA]',
   ['Node.js']: 'text-[#62B449]',
   ['Next.js']: 'text-black dark:text-white',
}

const DEFAULT_TEXT = 'these'

export function Stack() {
   const [text, setText] = useState(DEFAULT_TEXT)
   const color = colors[text]

   return (
      <section>
         <Typography as='h1' variant='title' className='mb-2'>
            Stack
         </Typography>

         <Typography className='mb-4'>
            I love to code using{' '}
            <span className={cn('font-medium', color)}>{text}</span>
         </Typography>

         <ul className='flex justify-center w-full pl-10 bg-zinc-100 dark:bg-zinc-900/70 py-20'>
            {stack.map((tech, i) => {
               return (
                  <li key={i}>
                     <Card
                        className={cn('-ml-10', i === 1 && 'mt-2')}
                        onMouseEnter={() => setText(tech.name)}
                        onMouseLeave={() => setText(DEFAULT_TEXT)}
                     >
                        <CardContent
                           className={i % 2 === 0 ? '-rotate-6' : 'rotate-12'}
                        >
                           <Image
                              width={60}
                              height={60}
                              className='w-10 h-10 md:w-[60px] md:h-[60px]'
                              src={tech.image}
                              alt={`${tech.name} logo`}
                           />

                           <CardFooter
                              title={tech.name}
                              subtitle={tech.description}
                           />
                        </CardContent>
                     </Card>
                  </li>
               )
            })}
         </ul>
      </section>
   )
}

function Card({
   className,
   children,
   ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
   return (
      <div className={cn('group w-[100px] md:w-[140px]', className)} {...rest}>
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
            'bg-white shadow-xl border border-zinc-200 shadow-zinc-500/5',
            className
         )}
      >
         <div className='h-4'></div>

         {children}
      </div>
   )
}

function CardFooter({ title, subtitle }: { title: string; subtitle: string }) {
   return (
      <div className='w-full self-end p-2'>
         <div className='text-xs text-[#DEDEDE]'>{subtitle}</div>
         <div className='text-sm font-medium text-zinc-900 hover:text-black'>
            {title}
         </div>
      </div>
   )
}

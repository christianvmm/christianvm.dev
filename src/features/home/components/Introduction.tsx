import Image from 'next/image'
import { Typography } from '@/components/Typography'
import { Chat } from '@/features/home/components/Chat'
import { useState } from 'react'
import { socialMediaLinks } from '@/consts'
import { cn } from '@/utils/cn'

export function Introduction() {
   const [open, setOpen] = useState(false)

   return (
      <header>
         <Image
            alt="Christian Velez Medina's profile image"
            width='640'
            height='640'
            quality={100}
            src='https://github.com/christianvmm.png'
            className='rounded-full flex-1 w-full max-w-[170px] max-h-[170px] mb-6'
         />

         <Typography as='h1' variant='title' className='mb-1'>
            Christian Velez Medina
         </Typography>

         <Typography className='mb-4'>
            I&apos;m a 21 y/o Software Developer with 2 years of experience.
            Currently studying CS at Universidad de Guadalajara.
         </Typography>

         <ul className='flex gap-6 w-full'>
            {socialMediaLinks.map((link) => {
               return (
                  <li key={link.name}>
                     <a
                        aria-label={`Christian Velez Medina's ${link.name}`}
                        href={link.href}
                        target='_blank'
                        className={cn(
                           'transition-colors font-medium flex items-center gap-2',
                           link.color
                        )}
                     >
                        {link.name}
                     </a>
                  </li>
               )
            })}

            <li>
               <button
                  className={cn(
                     'transition-colors font-medium flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400'
                  )}
                  onClick={() => setOpen(true)}
               >
                  Chat
               </button>
               <Chat open={open} setOpen={setOpen} />
            </li>
         </ul>
      </header>
   )
}

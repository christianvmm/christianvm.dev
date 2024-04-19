import { Typography } from '@/components/Typography'
import { Chat } from '@/features/home/components/Chat'
import { useState } from 'react'
import { socialMediaLinks } from '@/consts'
import { cn } from '@/utils/cn'

export function Introduction() {
   const [open, setOpen] = useState(false)

   return (
      <section>
         <div className='w-full lg:mx-auto'>
            <div className='w-full h-40 lg:h-48'>
               <div
                  className={`w-full h-full rounded-xl lg:rounded-2xl bg-[url('/assets/home/hospicio-cabanas.jpeg')] bg-cover bg-center relative`}
               >
                  <div className='w-full mx-auto absolute bottom-0 left-0 translate-y-20 pl-1 flex items-end'>
                     <img
                        src='https://github.com/christianvmm.png'
                        className='aspect-square rounded-full w-24 sm:w-28 border-4 border-light-zinc dark:border-black'
                        alt="Christian Velez Medina's profile image"
                     />

                     <div className='h-20 flex items-center pl-3'>
                        <div>
                           <Typography as='h1' variant='title'>
                              Christian Velez Medina
                           </Typography>

                           <Typography className='leading-4'>
                              Guadalajara, Jal.
                           </Typography>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Typography as='h1' variant='title' className='mb-4 mt-32'>
            About
         </Typography>

         <Typography className='mb-4'>
            I&apos;m a 21 y/o Software Developer with 2 years of experience.
            Currently studying CS at Universidad de Guadalajara. I started
            learning React back in August 2021 and landed my first job 6 months
            later. I enjoy automating things, web development and TypeScript.
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
      </section>
   )
}

import { Head } from '@/components/Head'
import { Badge } from '@/components/Badge'
import { socialMediaLinks } from '@/consts'
import Tooltip from '@/components/Tooltip'
import Image from 'next/image'

export const off = 'text-zinc-600 dark:text-zinc-400'
export const supperof = '#71717A text-zinc-500'
export const imagesBackground = '#F4F4F5 / white   dark:#111113'

export default function Home() {
   return (
      <>
         <Head title='home' />

         <div className='max-w-lg mx-auto flex  flex-col gap-24'>
            <section className='flex gap-8 flex-col'>
               <Image
                  alt="Christian Velez Medina's profile image"
                  width='640'
                  height='640'
                  quality={100}
                  src={`https://github.com/christianvmm.png`}
                  className='rounded-full flex-1 w-full max-w-[170px] max-h-[170px]'
               />

               <div>
                  <h1 className='text-xl font-semibold'>
                     Christian Velez Medina
                  </h1>

                  <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
                     I&apos;m a 21 y/o Software Developer with 2 years of
                     experience. Currently studying CS at Universidad de
                     Guadalajara.
                  </p>

                  <div className='flex gap-4'>
                     {socialMediaLinks.map((item) => {
                        return (
                           <a key={item.title} href={item.href} target='_blank'>
                              <item.icon />
                           </a>
                        )
                     })}
                  </div>
               </div>
            </section>

            <section>
               <div className='flex flex-col md:flex-row items-start gap-4 mb-3'>
                  <div>
                     <h1 className='font-semibold'>
                        Frontend Developer at Estradata
                     </h1>

                     <p className='text-sm'>
                        2021 - <span className=''> now</span>
                     </p>
                  </div>
               </div>

               <div className='text-zinc-600 dark:text-zinc-400'>
                  <p className='mb-8'>
                     I started my professional journey with Estradata, where I
                     employed{' '}
                     <Badge>
                        <Tooltip title='UI Library'>React</Tooltip>
                     </Badge>{' '}
                     to craft essential user interfaces alongside a dedicated
                     team of 9. Together, we developed a versatile toolkit that
                     empowered government agencies at local, national, and
                     international levels to enhance their political campaigns.
                  </p>

                  <p className='mb-8'>
                     The main product by far, was a CRM WhatsApp System built on
                     top of the{' '}
                     <a
                        href='https://github.com/pedroslopez/whatsapp-web.js'
                        target='_blank'
                        className='px-[0.1rem] font-medium text-black dark:text-white transition-all underline underline-offset-2'
                     >
                        pedro&apos;s lopez whatsapp-web.js library
                     </a>
                     .
                  </p>

                  <Image
                     className='mb-8 hidden dark:block'
                     src={'/assets/home/system-diagram-dark.png'}
                     alt='System Diagram'
                     width={512}
                     height={308}
                  />

                  <Image
                     className='mb-8 block dark:hidden'
                     src={'/assets/home/system-diagram.png'}
                     alt='System Diagram'
                     width={512}
                     height={308}
                  />

                  <p className='mb-8'>
                     This system, utilized by over a thousand users, provided an
                     alternative to the official WhatsApp Business platform.
                  </p>

                  <p className='mb-8'>
                     The big issues I ran into during this journey were dealing
                     with massive sets of data. I tackled it by mixing up
                     backend data splitting tricks and making use of the ReactJS
                     API to create a smooth and user-friendly graphic interface.
                  </p>
               </div>
            </section>
         </div>
      </>
   )
}

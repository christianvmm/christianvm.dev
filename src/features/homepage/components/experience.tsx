import { Typography } from '@/components/ui/typography'
import { link } from '@/styles'
import { cn } from '@/utils/cn'
import Image from 'next/image'

export function Experience() {
   return (
      <section>
         <Typography as='h1' variant='title' className='mb-4'>
            Experience
         </Typography>

         <div>
            <Typography as='h2' variant='subtitle'>
               Frontend Developer at Estradata
            </Typography>

            <Typography variant='small'>2022 - now</Typography>

            <div className='mt-3'>
               <Typography className='mb-8'>
                  I started my professional journey with Estradata, where I
                  employed React to craft essential user interfaces alongside a
                  dedicated team of 9. Together, we developed a versatile
                  toolkit that empowered government agencies at local, national,
                  and international levels to enhance their political campaigns.
               </Typography>

               <Typography className='mb-8'>
                  The main project by far, was a CRM WhatsApp System built on
                  top of the{' '}
                  <a
                     href='https://github.com/pedroslopez/whatsapp-web.js'
                     target='_blank'
                     className={cn(link, 'font-medium')}
                  >
                     pedro&apos;s lopez whatsapp-web.js library
                  </a>
                  .
               </Typography>

               <Image
                  className='mb-8 hidden dark:block bg-zinc-900/70'
                  src={'/assets/home/system-diagram-dark.png'}
                  alt='System Diagram'
                  width={512}
                  height={308}
               />

               <Image
                  className='mb-8 block dark:hidden bg-zinc-100'
                  src={'/assets/home/system-diagram.png'}
                  alt='System Diagram'
                  width={512}
                  height={308}
               />

               <Typography className='mb-8'>
                  This system, used by over a thousand users, provided an
                  alternative to the official WhatsApp Business platform.
               </Typography>

               <Typography className='mb-8'>
                  The big issues I ran into during this journey were dealing
                  with massive sets of data. I tackled it by mixing up backend
                  data splitting tricks and making use of the ReactJS API to
                  create a smooth and user-friendly graphic interface.
               </Typography>
            </div>
         </div>
      </section>
   )
}

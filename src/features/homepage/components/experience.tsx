import { Typography } from '@/components/ui/typography'
import { SystemDiagramImage } from '@/features/homepage/components/system-diagram-image'
import { link } from '@/styles'
import { cn } from '@/utils/cn'

export function Experience() {
   return (
      <section>
         <Typography as='h1' variant='title' className='mb-4'>
            Experience
         </Typography>

         <div>
            <div className='flex items-center justify-between h-10'>
               <Typography as='h2' variant='subtitle'>
                  Full Stack Developer, Estradata
               </Typography>

               <Typography variant='small'>2022 - now</Typography>
            </div>

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
                     className={cn(link)}
                  >
                     pedro&apos;s lopez whatsapp-web.js library
                  </a>
                  .
               </Typography>

               <SystemDiagramImage />

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

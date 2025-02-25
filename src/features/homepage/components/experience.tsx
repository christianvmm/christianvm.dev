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
                  My journey at Estradata began as a Frontend Developer, where I
                  built intuitive user interfaces using React. Our team
                  developed a suite of applications that empowered agencies at
                  local, national, and international levels.
               </Typography>

               <Typography className='mb-8'>
                  The most significant project I worked on was a WhatsApp CRM
                  system built on top of the{' '}
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
                  Used by over a thousand users, this system provided a powerful
                  alternative to the official WhatsApp Business platform.
               </Typography>

               <Typography className='mb-8'>
                  One of the biggest challenges I faced was handling massive
                  datasets efficiently. I tackled this by optimizing backend
                  data processing and leveraging{' '}
                  <Typography as='span' variant='accent'>
                     React&apos;s API
                  </Typography>{' '}
                  to create a seamless and responsive user experience.
               </Typography>

               <Typography className='mb-8'>
                  As the project evolved, we introduced an official{' '}
                  <Typography as='span' variant='accent'>
                     Meta API
                  </Typography>{' '}
                  integration, offering clients a direct connection. This
                  transition also led to a major codebase migration from{' '}
                  <Typography as='span' variant='accent'>
                     React + JavaScript + Laravel
                  </Typography>{' '}
                  to{' '}
                  <Typography as='span' variant='accent'>
                     Next.js
                  </Typography>
                  . The goal was to unify the frontend and backend into a single
                  repository, making the codebase more maintainable and
                  scalable.
               </Typography>

               <Typography className='mb-8'>
                  To further enhance code quality and reliability, we adopted{' '}
                  <Typography as='span' variant='accent'>
                     TypeScript
                  </Typography>
                  , allowing for a more structured and type-safe development
                  process. Libraries like{' '}
                  <Typography as='span' variant='accent'>
                     Zod
                  </Typography>{' '}
                  were instrumental in implementing validation across both
                  frontend and backend while generating type definitions. We
                  also integrated{' '}
                  <Typography as='span' variant='accent'>
                     Prisma
                  </Typography>{' '}
                  as an ORM for both{' '}
                  <Typography as='span' variant='accent'>
                     SQL
                  </Typography>{' '}
                  and{' '}
                  <Typography as='span' variant='accent'>
                     MongoDB
                  </Typography>
                  , ensuring type safety at every layer of the application.
               </Typography>
            </div>
         </div>
      </section>
   )
}

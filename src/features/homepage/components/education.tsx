import { Typography } from '@/components/ui/typography'

export function Education() {
   return (
      <section>
         <Typography as='h1' variant='title' className='mb-4'>
            Education
         </Typography>

         <div>
            <div className='flex items-center justify-between h-10'>
               <Typography as='h2' variant='subtitle'>
                  Bachelor&apos;s Degree in Computer Science, UdeG
               </Typography>

               <Typography variant='small'>2026</Typography>
            </div>

            <div className='flex items-center justify-between h-10'>
               <Typography as='h2' variant='subtitle'>
                  Software Development Technologist, CETI Colomos
               </Typography>

               <Typography variant='small'>2022</Typography>
            </div>
         </div>
      </section>
   )
}

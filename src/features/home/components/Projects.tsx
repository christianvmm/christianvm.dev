import Image from 'next/image'
import { Typography } from '@/components/Typography'

export function Projects() {
   return (
      <section>
         <h1 className='font-semibold text-xl mb-4'>Projects</h1>

         <a
            aria-label='Finance App'
            href='https://finance-xi.vercel.app?email=johndoe@gmail.com&password=123456'
            target='_blank'
         >
            <h2 className='font-semibold'>Finance</h2>

            <Typography className='mb-4'>
               Monitor finances with ease.
            </Typography>

            <div className='overflow-hidden bg-zinc-100 dark:bg-zinc-900/70 flex h-96 items-center justify-center mb-16'>
               <Image
                  className='relative md:left-0 h-96 object-cover object-left pl-4'
                  src={'/assets/home/finance.png'}
                  alt='Finance Screenshot'
                  width={1948}
                  height={1072}
               />
            </div>
         </a>
      </section>
   )
}

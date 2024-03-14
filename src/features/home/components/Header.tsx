import Image from 'next/image'
import { socialMediaLinks } from '@/consts'
import { cn } from '@/utils/cn'
import { Typography } from '@/components/Typography'

export function Header() {
   return (
      <div>
         <header>
            <figure className='relative w-full max-w-[170px] max-h-[170px] mb-6'>
               <Image
                  alt="Christian Velez Medina's profile image"
                  width='640'
                  height='640'
                  quality={100}
                  src={`https://github.com/christianvmm.png`}
                  className='rounded-full flex-1 w-full'
               />

               <div
                  role='status'
                  className='absolute right-0 top-3/4 flex group'
               >
                  <div className='rounded-full text-center flex items-center justify-center bg-white border border-zinc-200 shadow-zinc-500/5 dark:bg-zinc-950 dark:border-zinc-900 p-1'>
                     <Image
                        src='/assets/home/react.svg'
                        alt='React logo'
                        width={20}
                        height={20}
                     />
                  </div>
               </div>
            </figure>

            <h1 className='text-xl font-semibold mb-1'>
               Christian Velez Medina
            </h1>

            <Typography className='mb-4'>
               I&apos;m a 21 y/o{' '}
               <span className='text-black dark:text-white font-medium'>
                  Software Developer
               </span>{' '}
               with{' '}
               <span className='text-black dark:text-white font-medium'>
                  2 years of experience
               </span>
               . Currently studying CS at Universidad de Guadalajara.
            </Typography>
         </header>

         <ul className='flex gap-6 w-full'>
            {socialMediaLinks.map((link) => {
               return (
                  <li key={link.name}>
                     <a
                        aria-label={`Christian Velez Medina's ${link.name}`}
                        href={link.href}
                        target='_blank'
                        className={cn(
                           'transition-colors font-medium flex items-center gap-2 hover:text-zinc-600 dark:hover:text-zinc-400'
                        )}
                     >
                        {link.name}

                        <link.icon />
                     </a>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

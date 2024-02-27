import { Head } from '@/components/Head'
import { socialMediaLinks } from '@/consts'
import Image from 'next/image'
import { link } from '@/styles'
import { cn } from '@/utils/cn'
import { Text } from '@/components/Text'

export const supperof = '#71717A text-zinc-500'
export const imagesBackground = '#F4F4F5 / white   dark:#111113'

export default function Home() {
   return (
      <>
         <Head title='home' />

         <div className='max-w-lg mx-auto flex flex-col gap-24 pb-10'>
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
                              src='/assets/home/react.png'
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

                  <Text className='mb-4'>
                     I&apos;m a 21 y/o{' '}
                     <span className='text-black dark:text-white font-medium'>
                        Software Developer
                     </span>{' '}
                     with{' '}
                     <span className='text-black dark:text-white font-medium'>
                        2 years of experience
                     </span>
                     . Currently studying CS at Universidad de Guadalajara.
                  </Text>
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
                                 'text-zinc-400 transition-colors font-medium flex items-center gap-2 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400'
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

            <section>
               <h1 className='font-semibold text-xl mb-4'>Work</h1>

               <div>
                  <h2 className='font-semibold'>
                     Frontend Developer at Estradata
                  </h2>

                  <p className='text-sm'>2021 - now</p>

                  <div className=' mt-3'>
                     <Text className='mb-8'>
                        I started my professional journey with Estradata, where
                        I employed{' '}
                        <span className='font-medium text-black dark:text-white'>
                           React
                        </span>{' '}
                        to craft essential user interfaces alongside a dedicated
                        team of 9. Together, we developed a versatile toolkit
                        that empowered government agencies at local, national,
                        and international levels to enhance their political
                        campaigns.
                     </Text>

                     <Text className='mb-8'>
                        The main product by far, was a CRM WhatsApp System built
                        on top of the{' '}
                        <a
                           href='https://github.com/pedroslopez/whatsapp-web.js'
                           target='_blank'
                           className={cn(link, 'font-medium')}
                        >
                           pedro&apos;s lopez whatsapp-web.js library
                        </a>
                        .
                     </Text>

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

                     <Text className='mb-8'>
                        This system, used by over a thousand users, provided an
                        alternative to the official WhatsApp Business platform.
                     </Text>

                     <Text className='mb-8'>
                        The big issues I ran into during this journey were
                        dealing with massive sets of data. I tackled it by
                        mixing up backend data splitting tricks and making use
                        of the ReactJS API to create a smooth and user-friendly
                        graphic interface.
                     </Text>
                  </div>
               </div>
            </section>

            <section>
               <h1 className='font-semibold text-xl  mb-4'>Projects</h1>

               <a
                  className='mb-16'
                  aria-label={`Finance app`}
                  href='https://finance-xi.vercel.app?email=johndoe@gmail.com&password=123456'
                  target='_blank'
               >
                  <h2 className='font-semibold'>Finance</h2>

                  <Text className='mb-4'>Monitor finances with ease.</Text>

                  <div className='overflow-hidden bg-zinc-100 dark:bg-zinc-900/70 flex h-96 items-center justify-center'>
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
         </div>
      </>
   )
}

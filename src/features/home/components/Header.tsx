import Image from 'next/image'
import Finder from '../../../../public/assets/home/finder.png'
import Github from '../../../../public/assets/home/github.png'
import Messages from '../../../../public/assets/home/messages.png'
import Linkedin from '../../../../public/assets/home/linkedin.png'
import { Typography } from '@/components/Typography'
import { Dock } from '@/components/Dock'
import { Chat } from '@/features/home/components/Chat'
import { useState } from 'react'

export function Header() {
   const [open, setOpen] = useState(false)

   const apps = [
      {
         id: 'finder',
         icon: Finder,
         name: 'Finder',
      },
      {
         id: 'linkedin',
         icon: Linkedin,
         name: 'Linkedin',
         href: 'https://www.linkedin.com/in/christianvm',
      },
      {
         id: 'github',
         icon: Github,
         name: 'GitHub',
         href: 'https://www.github.com/christianvmm',
      },
      {
         id: 'chat',
         icon: Messages,
         name: 'Send me a message',
         onClick: () => {
            setOpen(true)
         },
      },
   ]

   return (
      <header className='text-center'>
         <figure className='relative w-full max-w-[170px] max-h-[170px] mb-6 mx-auto'>
            <Image
               alt="Christian Velez Medina's profile image"
               width='640'
               height='640'
               quality={100}
               src='https://github.com/christianvmm.png'
               className='rounded-full flex-1 w-full'
            />
         </figure>

         <h1 className='text-xl font-semibold mb-1'>Christian Velez Medina</h1>

         <Typography className='mb-4'>
            I&apos;m a 21 y/o Software Developer with 2 years of experience.
            Currently studying CS at Universidad de Guadalajara.
         </Typography>

         <div className='flex'>
            <Dock apps={apps} />
         </div>

         <Chat open={open} setOpen={setOpen} />
      </header>
   )
}

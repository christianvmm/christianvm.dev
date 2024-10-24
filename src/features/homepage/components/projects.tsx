import Image from 'next/image'
import FolderArt from '../../../../public/assets/home/folderart.png'
import ChatUI from '../../../../public/assets/home/chat-ui.png'
import Wallet from '../../../../public/assets/home/wallet.png'
import { Typography } from '@/components/ui/typography'

const projects = [
   {
      name: 'Chat UI',
      href: 'https://chat.christianvm.dev',
      description:
         'A modern chat application interface. Share images, videos, documents, and more.',
      src: ChatUI,
   },
   {
      name: 'FolderArt',
      href: 'https://folderart.christianvm.dev',
      description: 'Create custom folder icons for macOS.',
      src: FolderArt,
   },
   {
      name: 'Wallet',
      href: 'https://wallet.christianvm.dev',
      description: 'Monitor finances with ease.',
      src: Wallet,
   },
]

export function Projects() {
   return (
      <section>
         <Typography as='h1' variant='title' className='mb-4'>
            Projects
         </Typography>

         <ul>
            {projects.map((project, i) => {
               return (
                  <li key={i}>
                     <a
                        aria-label={`Link to ${project.name} ap`}
                        href={project.href}
                        target='_blank'
                     >
                        <Typography as='h2' variant='subtitle'>
                           {project.name}
                        </Typography>

                        <Typography className='mb-4'>
                           {project.description}
                        </Typography>

                        <div className='overflow-hidden bg-zinc-100 dark:bg-zinc-900/70 flex h-96 items-center justify-center mb-16'>
                           <Image
                              className='relative md:left-0 h-96 object-cover object-left pl-4'
                              src={project.src}
                              alt={`${project.name} screenshot`}
                              width={1948}
                              height={1072}
                           />
                        </div>
                     </a>
                  </li>
               )
            })}
         </ul>
      </section>
   )
}

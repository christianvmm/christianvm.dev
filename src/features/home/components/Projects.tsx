import Image from 'next/image'
import { Typography } from '@/components/Typography'
import FolderArt from 'public/assets/home/folderart.png'
import Finance from 'public/assets/home/finance.png'

const projects = [
   {
      name: 'FolderArt',
      href: 'https://folderart.christianvm.dev',
      description: 'Create custom folder icons for macOS.',
      src: FolderArt,
   },
   {
      name: 'Finance',
      href: 'https://finance-xi.vercel.app?email=johndoe@gmail.com&password=123456',
      description: 'Monitor finances with ease.',
      src: Finance,
   },
]

export function Projects() {
   return (
      <section>
         <h1 className='font-semibold text-xl mb-4'>Projects</h1>

         <ul>
            {projects.map((project, i) => {
               return (
                  <li key={i}>
                     <a
                        aria-label={`Link to ${project.name} ap`}
                        href={project.href}
                        target='_blank'
                     >
                        <h2 className='font-semibold'>{project.name}</h2>

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

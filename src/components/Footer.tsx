import { socialMediaLinks } from '@/consts'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = [
   {
      title: 'Home',
      href: '/',
   },
   {
      title: 'Music',
      href: '/music',
   },
   {
      title: 'Blog',
      href: '/blog',
   },
]

export default function Footer() {
   const pathname = usePathname()

   return (
      <footer
         className='py-16 border-t border-t-zinc-100 dark:border-t-zinc-900 order-3
         px-6 md:px-10
      '
      >
         <div className='max-w-lg mx-auto grid gap-y-14 grid-cols-2 md:grid-cols-3 justify-between'>
            <div>
               <h6 className='font-semibold'>Pages</h6>

               <ul className='mt-4 space-y-2'>
                  {pages.map((page) => {
                     const current = pathname === page.href
                     const title = page.title

                     return (
                        <li key={page.href}>
                           <Link
                              className={cn(
                                 'text-zinc-400 transition-colors font-medium',
                                 current
                                    ? 'text-zinc-600 dark:text-zinc-400'
                                    : 'hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400'
                              )}
                              href={page.href}
                           >
                              {title}
                           </Link>
                        </li>
                     )
                  })}
               </ul>
            </div>

            <div>
               <h6 className='font-semibold'>Contact</h6>

               <ul className='mt-4 space-y-2'>
                  {socialMediaLinks.map((link) => {
                     return (
                        <li key={link.href}>
                           <a
                              className={cn(
                                 'text-zinc-400 transition-colors font-medium flex items-center gap-2 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400'
                              )}
                              href={link.href}
                              target='_blank'
                           >
                              {link.name}

                              <link.icon />
                           </a>
                        </li>
                     )
                  })}
               </ul>
            </div>

            <div className='flex md:justify-end'>
               <p className='text-zinc-400 dark:text-zinc-600 text-sm'>
                  © {new Date().getFullYear()}
               </p>
            </div>
         </div>
      </footer>
   )
}

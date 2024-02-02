import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'

const appLinks = [
   {
      href: '/',
      label: 'Home',
   },
   {
      href: '/music',
      label: 'Music',
   },
   {
      href: '/blog',
      label: 'Blog',
   },
]

export function Navbar() {
   const [selectorPosition, setSelectorPosition] = useState({
      x: 0,
      width: 0,
   })
   const selector = useRef<HTMLDivElement>(null)
   const pathname = usePathname()

   const handleSelector = useCallback(() => {
      const currentPath = pathname

      if (!selector.current) {
         return
      }

      // Include only specified pages for showing the selector
      if (appLinks.map((l) => l.href).includes(currentPath)) {
         const activeLink = document.querySelector(
            `#nav-links>a[href="${currentPath}"]`
         )

         if (activeLink) {
            const { x, width } = activeLink.getBoundingClientRect()

            // Adjustments for mobile screens
            const isMobile =
               typeof window !== 'undefined' && window.innerWidth < 1024

            const mobileWidthFactor = 1 + 1 / appLinks.length

            setSelectorPosition({
               x: isMobile ? x - width / (mobileWidthFactor * 2) : x,
               width: isMobile ? width * mobileWidthFactor : width,
            })

            selector.current.classList.remove('opacity-0')
            setTimeout(() => {
               if (selector.current) {
                  selector.current.classList.add('transition-all')
               }
            }, 100)
         }
      } else {
         selector.current.classList.add('opacity-0')
      }
   }, [pathname])

   useLayoutEffect(() => {
      // On first render, wait for the selector to be rendered
      if (selectorPosition.x === 0 && selectorPosition.width === 0) {
         setTimeout(() => {
            handleSelector()
         }, 100)
      }

      requestAnimationFrame(() => {
         handleSelector()
      })

      // On resize, reposition the selector
      window.addEventListener('resize', handleSelector)

      return () => {
         window.removeEventListener('resize', handleSelector)
      }
   }, [pathname, selectorPosition.width, selectorPosition.x, handleSelector])

   return (
      <nav className='sticky lg:top-0 lg:bottom-auto lg:border-t-transparent lg:border-l-transparent lg:border-r-transparent lg:border-b border border-zinc-200 lg:border-b-zinc-100 bg-white z-[51] top-auto bottom-8 mb-8 w-full lg:max-w-none max-w-[90%] mx-auto rounded-full lg:rounded-none shadow-xl shadow-black/5 lg:shadow-none dark:bg-zinc-950 dark:lg:border-b-zinc-900 dark:border-zinc-900'>
         <div className='w-full flex items-center justify-between max-w-screen-xl mx-auto md:px-10 min-[350px]:px-4 xs:px-3 '>
            <div className='items-center flex-shrink-0 mr-6 hidden md:flex'>
               <Link href='/' className='group/all -ml-1 cursor-pointer'>
                  <p className='text-lg font-medium group-hover/all:text-zinc-500 transition-colors relative dark:group-hover/all:text-zinc-400 '>
                     <span className='group relative'>Christian</span>
                     <span className='text-base font-normal text-zinc-500 group-hover/all:text-zinc-400 ml-2 transition-colors hidden md:inline-block dark:group-hover/all:text-zinc-600'>
                        Software Developer
                     </span>
                  </p>
               </Link>
            </div>

            <div
               className='flex items-center md:gap-8 gap-2 justify-between md:justify-normal w-full md:w-auto lg:px-0 md:px-1.5 px-0'
               id='nav-links'
            >
               {appLinks.map((link) => {
                  return (
                     <NavigationLink href={link.href} key={link.href}>
                        {link.label}
                     </NavigationLink>
                  )
               })}

               <div
                  ref={selector}
                  style={{
                     left: selectorPosition.x,
                     width: selectorPosition.width,
                  }}
                  className='md:h-[1px] h-12 lg:-translate-x-0 md:-translate-x-8 translate-x-0 flex-shrink-0 absolute md:bottom-[-1px] bg-black opacity-0 rounded-full md:rounded-none dark:bg-white'
               />
            </div>
         </div>
      </nav>
   )
}

function NavigationLink(props: {
   href: string
   children?: string
   className?: string
}) {
   const pathname = usePathname()
   const active = pathname === props.href

   const className = [
      props.className,
      active
         ? 'md:text-black text-white relative z-10 before:opacity-0 dark:md:text-white dark:text-black'
         : 'text-zinc-400 hover:text-black before:opacity-0 dark:hover:text-white',
   ]
      .filter(Boolean)
      .join(' ')

   return (
      <Link
         {...props}
         className={`${className} py-4 transition-colors duration-150 before:absolute group font-medium md:w-auto w-full text-center
       before:inset-x-0 before:-bottom-[3px] before:h-[1px] before:bg-black max-md:before:hidden relative z-10 text-sm xs:text-base`}
      />
   )
}

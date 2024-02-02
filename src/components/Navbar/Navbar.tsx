import cn from 'classnames'
import styles from './navbar.module.css'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { links } from '@/data'

export function Navbar() {
   const scrollDistanceToShow = 800
   const introRef = useRef<HTMLDivElement>(null)
   const showing = useRef(false)

   useEffect(() => {
      const updateHiddenElement = () => {
         if (!introRef.current) return

         if (window.scrollY > scrollDistanceToShow) {
            if (showing.current) return

            introRef.current.style.opacity = '1'
            showing.current = true
         } else {
            if (!showing.current) return

            introRef.current.style.opacity = '0'
            showing.current = false
         }
      }

      window.addEventListener('scroll', updateHiddenElement)

      return () => {
         window.removeEventListener('scroll', updateHiddenElement)
      }
   }, [])

   return (
      <nav
         className={cn(
            styles.navBar,
            'hidden lg:flex flex-col h-screen gap-1 justify-center items-start fixed left-0 top-0 pl-6 z-10'
         )}
      >
         <div ref={introRef} className={styles.intro}>
            <NavItem
               href='#introduction'
               imgSrc='https://assets-global.website-files.com/5ea094d69feadb4133a3d1dd/652d3a68c8c8ea12c1b9b3d7_Introduction1.png'
               title='Intro'
               rightContent={
                  <Image
                     width='16'
                     height='16'
                     src='arrow-image.svg'
                     loading='lazy'
                     alt='right arrow small'
                     className='-rotate-90 opacity-10'
                  />
               }
            />

            <div className='h-4 flex items-center pl-3'>
               <div
                  className='w-6 h-[2px] rounded-sm'
                  style={{
                     backgroundColor: 'rgba(0, 0, 0, .06)',
                  }}
               />
            </div>
         </div>

         {links.map((link) => {
            return (
               <NavItem
                  href={link.href}
                  key={link.href}
                  imgSrc={link.imgSrc}
                  title={link.title}
               />
            )
         })}
      </nav>
   )
}

function NavItem({
   href,
   imgSrc,
   title,
   className = '',
   rightContent,
}: {
   href: string
   imgSrc: string
   title: string
   className?: string
   rightContent?: React.ReactNode
}) {
   return (
      <a href={href} className={styles.link}>
         <div
            className={cn(
               styles.navItem,
               'rounded-xl relative hover:shadow-navItem hover:dark:shadow-navItemDark hover:bg-navItem dark:hover:bg-navItemDark',
               className
            )}
         >
            <Image
               alt={`${title} logo`}
               src={imgSrc}
               className='w-8 h-8 rounded-lg icon absolute top-2 left-2'
            />

            <div
               className={cn(
                  'w-[230px] h-[48px] py-[13px] pr-[14px] pl-[50px] flex justify-between items-center gap-[2px] rounded-xl opacity-0',
                  styles.content
               )}
            >
               <h5 className='font-medium leading-5'>{title}</h5>

               {rightContent}
            </div>
         </div>
      </a>
   )
}

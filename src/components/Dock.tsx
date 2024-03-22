// Credits: https://buildui.com/recipes/magnified-dock

import { Tooltip } from '@/components/Tooltip'
import {
   type MotionValue,
   motion,
   useMotionValue,
   useSpring,
   useTransform,
} from 'framer-motion'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import { useRef } from 'react'

type App = {
   id: string
   icon: ImageProps['src']
   name: string
   href?: string
   onClick?: () => void
}

export function Dock({ apps }: { apps: App[] }) {
   const mouseX = useMotionValue(Infinity)

   return (
      <motion.ul
         onMouseMove={(e) => mouseX.set(e.pageX)}
         onMouseLeave={() => mouseX.set(Infinity)}
         className='mx-auto flex h-[58px] items-end gap-2 rounded-2xl px-2 pb-2 
         bg-white border border-zinc-100 shadow-zinc-500/5 dark:bg-zinc-950 dark:border-zinc-900'
      >
         {apps.map((app) => {
            if (app.href) {
               return (
                  <li className='flex' key={app.id}>
                     <a
                        href={app.href}
                        className='relative group'
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        <Tooltip title={app.name} />
                        <App mouseX={mouseX} src={app.icon} />
                     </a>
                  </li>
               )
            }

            if (app.onClick) {
               return (
                  <li className='flex' key={app.id}>
                     <button className='relative group' onClick={app.onClick}>
                        <Tooltip title={app.name} />
                        <App mouseX={mouseX} src={app.icon} />
                     </button>
                  </li>
               )
            }

            return (
               <li className='flex' key={app.id}>
                  <div className='relative group'>
                     <Tooltip title={app.name} />
                     <App mouseX={mouseX} src={app.icon} />
                  </div>
               </li>
            )
         })}
      </motion.ul>
   )
}

const Icon = React.forwardRef<ImageProps, any>((props, ref) => (
   <Image {...props} ref={ref} alt='App' />
))

Icon.displayName = 'Icon'

const AnimatedIcon = motion(Icon)

function App({ mouseX, src }: { mouseX: MotionValue; src: ImageProps['src'] }) {
   const ref = useRef<HTMLDivElement>(null)

   const distance = useTransform(mouseX, (val) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

      return val - bounds.x - bounds.width / 2
   })

   const widthSync = useTransform(distance, [-100, 0, 100], [40, 55, 40])
   const width = useSpring(widthSync, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
   })

   return (
      <AnimatedIcon
         src={src}
         width={60}
         height={60}
         alt=''
         quality={100}
         ref={ref}
         style={{ width }}
         className='aspect-square rounded-lg cursor-pointer'
      />
   )
}

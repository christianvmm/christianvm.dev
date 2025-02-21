'use client'

import { useTheme } from 'next-themes'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Modal } from '@/components/modal'

export function SystemDiagramImage() {
   const { resolvedTheme } = useTheme()
   const [open, setOpen] = useState(false)
   const src =
      resolvedTheme === 'light'
         ? '/assets/home/system-diagram.png'
         : '/assets/home/system-diagram-dark.png'

   return (
      <Fragment>
         <Image
            className='mb-8 bg-zinc-100 dark:bg-zinc-900/70 cursor-pointer'
            src={src}
            alt='System Diagram'
            width={4148}
            height={2498}
            onClick={() => setOpen(true)}
         />

         <Modal open={open} onClose={() => setOpen(false)}>
            <Image
               src={src}
               alt='System Diagram'
               width={4148}
               height={2498}
               className='bg-zinc-100 dark:bg-zinc-950'
            />
         </Modal>
      </Fragment>
   )
}

'use client'

import { cn } from '@/utils/cn'
import { useState } from 'react'
import { Chat } from '@/features/home/components/chat'

export function ChatButton() {
   const [open, setOpen] = useState(false)

   return (
      <>
         <button
            className={cn(
               'transition-colors font-medium flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400'
            )}
            onClick={() => setOpen(true)}
         >
            Chat
         </button>
         <Chat open={open} setOpen={setOpen} />
      </>
   )
}

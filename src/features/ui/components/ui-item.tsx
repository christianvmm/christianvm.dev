'use client'
import { Typography } from '@/components/ui/typography'
import { useIsMounted } from '@/hooks'
import { CheckIcon, CopyIcon, ExternalLinkIcon } from 'lucide-react'
import { useState } from 'react'

export function UIItem({
   children,
   src,
   code,
   title,
}: {
   children: React.ReactNode
   src: string
   code: string
   title: string
}) {
   const [copied, setCopied] = useState(false)
   const mounted = useIsMounted()

   async function copyCode() {
      if (!children) return

      await navigator.clipboard.writeText(code)
      setCopied(true)

      setTimeout(() => {
         if (mounted.current) {
            setCopied(false)
         }
      }, 1000)
   }

   return (
      <div>
         <div className='flex justify-between flex-wrap items-center gap-10 mb-2'>
            <Typography variant='subtitle' as='h1' className='mb-2'>
               {title}
            </Typography>

            <div className='flex gap-2'>
               <button
                  className='p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors'
                  title='Copy to clipboard'
                  onClick={() => copyCode()}
               >
                  {copied ? (
                     <CheckIcon className='w-4 h-4' />
                  ) : (
                     <CopyIcon className='w-4 h-4' />
                  )}
               </button>

               <a
                  className='p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors'
                  title='Open in External Tab'
                  href={src}
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <ExternalLinkIcon className='h-4 w-4' />
               </a>
            </div>
         </div>

         <div className='w-full h-80 rounded-md border border-zinc-200 dark:border-zinc-900 flex items-center justify-center'>
            {children}
         </div>
      </div>
   )
}

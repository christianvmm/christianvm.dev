'use client'
import { useIsMounted } from '@/hooks'
import { CheckIcon, CopyIcon } from '@/icons'
import { useState } from 'react'

export function CodeBlock({
   children,
   ...props
}: React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLPreElement>,
   HTMLPreElement
> & {
   children: React.JSX.Element
}) {
   const [copied, setCopied] = useState(false)
   const mounted = useIsMounted()

   async function copyCode() {
      if (!children) return

      if (typeof children.props.children === 'string') {
         await navigator.clipboard.writeText(children.props.children)
         setCopied(true)

         setTimeout(() => {
            if (mounted.current) {
               setCopied(false)
            }
         }, 1000)
      }
   }

   return (
      <pre
         className='dark:selection:bg-zinc-800 text-sm h-full font-mono flex flex-col justify-between bg-zinc-900 dark:bg-zinc-900/70'
         {...props}
      >
         <div className='flex w-full justify-between p-3 pb-0'>
            <div className='window-btns'>
               <div className='window-btn close'></div>
               <div className='window-btn minimize'></div>
               <div className='window-btn expand'></div>
            </div>

            <button
               aria-label='Copy code'
               onClick={() => copyCode()}
               className='text-white  p-2 rounded-md hover:bg-zinc-700 transition-colors'
            >
               {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
         </div>

         {children}
      </pre>
   )
}

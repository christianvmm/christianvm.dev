// 'use client'
// import { cn } from '@/utils/cn'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/nord.css'

// export function Code({
//    className,
//    children,
//    ...props
// }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
//    children: string
// }) {
//    if (typeof children !== 'string') return null

//    const highlightedHtml = hljs.highlightAuto(children).value

//    return (
//       <code
//          className={cn(className, 'overflow-x-auto p-3 pt-0  rounded-md')}
//          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
//          data-highlighted='yes'
//          {...props}
//       />
//    )
// }


'use client'
import { cn } from '@/utils/cn'
import hljs from 'highlight.js'
import { useEffect } from 'react'
import 'highlight.js/styles/nord.css'

// TODO: fix layout flash
export function Code({
   className,
   ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
   children: string
}) {
   useEffect(() => {
      hljs.highlightAll()
   }, [])

   return (
      <code
         className={cn(className, 'overflow-x-auto p-3 pt-0  rounded-md')}
         {...props}
      />
   )
}

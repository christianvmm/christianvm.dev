import { cn } from '@/utils/cn'
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css'

export function Code({
   className,
   children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
   children: string
}) {
   if (typeof children !== 'string') return null

   const languageStr = className?.split('-').at(-1)
   if (!languageStr) return null

   const language = hljs.getLanguage(languageStr)

   if (!language) return null

   const highlightedHtml = hljs.highlight(children, {
      language: languageStr,
   }).value

   return (
      <code
         className={cn(
            'overflow-x-auto p-3 pt-0  rounded-md hljs',
            className,
            language.className
         )}
         dangerouslySetInnerHTML={{
            __html: highlightedHtml,
         }}
      />
   )
}

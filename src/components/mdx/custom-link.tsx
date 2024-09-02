import Link from 'next/link'
import { cn } from '@/utils/cn'
import { link } from '@/styles'

export function CustomLink(props: {
   href: string
   children: string
   className: string
}) {
   const { href, className, ...rest } = props

   if (href.startsWith('/')) {
      return (
         <Link href={href} {...rest} className={cn(link, className)}>
            {props.children}
         </Link>
      )
   }

   if (href.startsWith('#')) {
      return <a {...props} />
   }

   return (
      <a
         href={href}
         target='_blank'
         rel='noopener noreferrer'
         className={cn(link, className)}
         {...rest}
      />
   )
}

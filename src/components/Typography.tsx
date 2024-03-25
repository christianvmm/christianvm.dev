import { cn } from '@/utils/cn'

export const textOff = ''

type Variants = {
   pageTitle: string
   title: string
   subtitle: string
   body: string
   small: string
}
const variants: Variants = {
   pageTitle: 'text-2xl font-semibold',
   title: 'text-xl font-semibold',
   subtitle: 'font-semibold',
   body: 'text-zinc-600 dark:text-zinc-400 leading-7',
   small: 'text-sm ',
}

const defaultElement = 'p'

type TypographyProps<T extends React.ElementType = typeof defaultElement> =
   PolymorphicProps<T> & {
      variant?: keyof Variants
   }

export function Typography<T extends React.ElementType = 'p'>({
   className,
   variant = 'body',
   as,
   ...props
}: TypographyProps<T>) {
   const Component = as || 'p'

   return <Component className={cn(variants[variant], className)} {...props} />
}

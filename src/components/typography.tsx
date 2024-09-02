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
   pageTitle: 'text-2xl font-semibold text-black dark:text-white',
   title: 'text-lg font-semibold text-black dark:text-white',
   subtitle: 'font-semibold text-black dark:text-white',
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

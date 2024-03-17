import { cn } from '@/utils/cn'

export const textOff = 'text-zinc-600 dark:text-zinc-400'

export function Typography({
   className,
   ...props
}: React.ComponentPropsWithoutRef<'p'>) {
   return <p className={cn(textOff, 'leading-7', className)} {...props} />
}

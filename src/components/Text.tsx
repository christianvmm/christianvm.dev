import { cn } from '@/utils/cn'

export const textOff = 'text-zinc-600 dark:text-zinc-400'

export function Text({
   className,
   ...props
}: React.ComponentPropsWithoutRef<'p'>) {
   return <p className={cn(textOff, className)} {...props} />
}

import { cn } from '@/utils/cn'
import { useInView } from 'react-intersection-observer'

type AnimatedBlockProps<T extends keyof JSX.IntrinsicElements> =
   React.ComponentPropsWithoutRef<T> & {
      animation?: string
      as?: T
   }

export function AnimatedBlock<T extends keyof JSX.IntrinsicElements>({
   children,
   className,
   as,
}: AnimatedBlockProps<T>) {
   const CustomTag = `${as}` as keyof JSX.IntrinsicElements

   const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true,
   })

   return (
      <div className={cn(className, inView ? 'animate-fadeLg' : 'reveal')} ref={ref}>
         {children}
      </div>
   )
}

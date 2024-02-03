import { cn } from '@/utils/cn'
import styles from './styles.module.css'
import { HTMLAttributes } from 'react'

export function MusicWave({ className }: HTMLAttributes<HTMLDivElement>) {
   return (
      <div className={cn('h-[20px] flex items-center', className)}>
         <Stroke />
         <Stroke />
         <Stroke />
         <Stroke />
         <Stroke />
      </div>
   )
}

function Stroke() {
   return (
      <span
         className={cn(
            'block relative bg-black dark:bg-white h-full w-[3px] rounded-3xl mx-[2px]',
            styles.stroke
         )}
      />
   )
}

import { Typography } from '@/components/ui/typography'
import { Track } from '@/lib/spotify'
import { link } from '@/styles'
import { cn } from '@/utils/cn'
import Image from 'next/image'

export function TrackItem({ track }: { track: Track }) {
   return (
      <li className='flex flex-row items-center space-x-4 h-[4.5rem]'>
         <Image
            className='w-16 h-16'
            src={track.image.url}
            width={track.image.width}
            height={track.image.height}
            alt={track.title}
         />

         <div className='flex flex-col flex-1'>
            <a
               href={track.songUrl}
               className={cn(link, ' font-semibold line-clamp-1')}
               target='_blank'
            >
               {track.title}
            </a>

            <Typography className='leading-normal line-clamp-1'>
               {track.artists.map(({ name }) => name).join(', ')}
            </Typography>

            <Typography className='leading-normal line-clamp-1'>
               {track.album}
            </Typography>
         </div>
      </li>
   )
}

export function TrackItemSkeleton() {
   return (
      <li className='flex flex-row items-center space-x-4 h-[4.5rem]'>
         <div className='rounded-sm h-16 w-16 bg-zinc-100 dark:bg-zinc-900 animate-pulse'></div>

         <div className='flex flex-col flex-1 gap-1'>
            <div className='rounded-sm h-5 bg-zinc-100 dark:bg-zinc-900 animate-pulse w-1/2'></div>
            <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse w-1/3'></div>
            <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse w-1/2'></div>
         </div>
      </li>
   )
}

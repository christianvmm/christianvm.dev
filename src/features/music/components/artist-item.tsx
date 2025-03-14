import { Typography } from '@/components/ui/typography'
import { Artist } from '@/lib/spotify'
import { link } from '@/styles'
import { cn } from '@/utils/cn'
import Image from 'next/image'

export function ArtistItem({ artist }: { artist: Artist }) {
   return (
      <li className='flex flex-row items-center space-x-4 h-[4.5rem]'>
         <Image
            width='64'
            height='64'
            className='w-16 h-16'
            src={artist.image}
            alt={artist.name}
         />

         <div className='flex flex-col flex-1'>
            <a
               href={artist.url}
               className={cn(link, ' font-semibold')}
               target='_blank'
               rel='noopener noreferrer'
            >
               {artist.name}
            </a>

            <Typography className='leading-normal'>
               {artist.followers} followers
            </Typography>
         </div>
      </li>
   )
}

export function ArtistItemSkeleton() {
   return (
      <li className='flex flex-row items-center space-x-4 h-[4.5rem]'>
         <div className='rounded-sm h-16 w-16 bg-zinc-100 dark:bg-zinc-900 animate-pulse'></div>

         <div className='flex flex-col flex-1 gap-1'>
            <div className='rounded-sm h-5 bg-zinc-100 dark:bg-zinc-900 animate-pulse w-1/2'></div>
            <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse w-1/3'></div>
         </div>
      </li>
   )
}

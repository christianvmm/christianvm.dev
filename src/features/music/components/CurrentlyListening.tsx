import { MusicWave } from '@/components/MusicWave'
import { Typography } from '@/components/Typography'
import { Tooltip } from '@/components/Tooltip'
import { useCurrentlyListening } from '@/pages/api/getCurrentlyListening'
import { link } from '@/styles'
import { cn } from '@/utils/cn'

export function CurrentlyListening() {
   const { data, error } = useCurrentlyListening()

   if (error) {
      return null
   }

   return (
      <div
         className={cn(
            'sticky p-3 px-4 rounded-md font-medium z-20 bg-white border border-zinc-200 shadow-xl shadow-zinc-500/5 dark:bg-zinc-950 dark:border-zinc-900 group cursor-help h-[90px]',
            'top-16 w-full max-w-lg mx-auto mb-16',
            'lg:mb-0 lg:bottom-10 lg:right-10 lg:mx-0 lg:ml-auto lg:order-2 lg:w-96'
         )}
      >
         <div className='flex items-center gap-4 h-full'>
            {data?.track && data?.title ? (
               <>
                  <Tooltip title={data.title} />

                  <img
                     height='64'
                     width='64'
                     src={data.track.image}
                     alt={data.track.title}
                  />

                  <div className='flex flex-col'>
                     <a
                        href={data.track.songUrl}
                        className={cn(link, 'font-semibold line-clamp-1')}
                        target='_blank'
                     >
                        {data.track.title}
                     </a>

                     <Typography className='text-sm line-clamp-1 leading-normal'>
                        {data.track.artists.map(({ name }) => name).join(', ')}
                     </Typography>
                     <Typography className='text-sm line-clamp-1 leading-normal'>
                        {data.track.album}
                     </Typography>
                  </div>
               </>
            ) : (
               <>
                  <div className='h-[64px] w-[64px] bg-zinc-100 dark:bg-zinc-900 animate-pulse' />

                  <div className='flex flex-col justify-between flex-1 h-full'>
                     <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse'></div>
                     <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse'></div>
                     <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse'></div>
                  </div>
               </>
            )}

            <MusicWave className='ml-auto' />
         </div>
      </div>
   )
}

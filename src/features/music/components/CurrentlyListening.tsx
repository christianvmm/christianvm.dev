import { MusicWave } from '@/components/MusicWave'
import { Tooltip } from '@/components/Tooltip'
import { useCurrentlyListening } from '@/pages/api/getCurrentlyListening'
import { cn } from '@/utils/cn'

export function CurrentlyListening() {
   const { data, error } = useCurrentlyListening()
   const link =
      'px-[0.1rem] font-semibold text-black dark:text-white transition-all underline underline-offset-2'

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
                        className={cn(link, 'line-clamp-1')}
                        target='_blank'
                     >
                        {data.track.title}
                     </a>

                     <p className='text-sm text-zinc-600 dark:text-zinc-400 line-clamp-1'>
                        {data.track.artists.map(({ name }) => name).join(', ')}
                     </p>
                     <p className='text-sm text-zinc-600 dark:text-zinc-400 line-clamp-1'>
                        {data.track.album}
                     </p>
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

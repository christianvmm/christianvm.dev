import { MusicWave } from '@/components/MusicWave'
import { Tooltip } from '@/components/Tooltip'
import { useCurrentlyListening } from '@/pages/api/getCurrentlyListening'
import { cn } from '@/utils/cn'

export function CurrentlyListening() {
   const { data } = useCurrentlyListening()
   const link =
      'px-[0.1rem] font-semibold text-black dark:text-white transition-all underline underline-offset-2'

   if (!data?.track) {
      return null
   }

   return (
      <div
         className={cn(
            'sticky p-3 px-4 rounded-md font-medium z-20 bg-white border border-zinc-200 shadow-xl shadow-zinc-500/5 dark:bg-zinc-950 dark:border-zinc-900 group cursor-help ',
            'top-8 w-full max-w-lg mx-auto mb-16',
            'lg:mb-0 lg:bottom-10 lg:right-10 lg:mx-0 lg:ml-auto lg:order-2 lg:w-96'
         )}
      >
         <Tooltip title="What I'm currently listening to." />

         <div className='flex items-center gap-4'>
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

               <p className='text-sm text-zinc-600 dark:text-[#a1a1aa] line-clamp-1'>
                  {data.track.artists.map(({ name }) => name).join(', ')}
               </p>
               <p className='text-sm text-zinc-600 dark:text-[#a1a1aa] line-clamp-1'>
                  {data.track.album}
               </p>
            </div>

            <MusicWave className='ml-auto' />
         </div>
      </div>
   )
}

import { MusicWave } from '@/features/music/components/music-wave'
import { Typography } from '@/components/ui/typography'
import { Tooltip } from '@/components/ui/tooltip'
import { link } from '@/styles'
import { cn } from '@/utils/cn'
import { getAccessToken, getCurrentlyListening, Track } from '@/lib/spotify'
import { getRecentlyPlayedTracks } from '@/lib/spotify/get-recently-played-tracks'
import { getTimeAgo } from '@/utils/format-date'
import { Suspense } from 'react'
import Image from 'next/image'

export async function CurrentlyListening() {
   return (
      <div
         className={cn(
            'sticky p-3 px-4 rounded-md font-medium z-20 bg-white border border-zinc-200 shadow-xl shadow-zinc-500/5 dark:bg-zinc-950 dark:border-zinc-900 group cursor-help h-[90px] text-start',
            'top-16 w-full max-w-lg mx-auto mb-16',
            'lg:mb-0 lg:bottom-10 lg:right-10 lg:mx-0 lg:ml-auto lg:order-2 lg:w-96'
         )}
      >
         <div className='flex items-center gap-4 h-full'>
            <Suspense fallback={<LoadingTrack />}>
               <TrackPlaying />
            </Suspense>

            <MusicWave className='ml-auto' />
         </div>
      </div>
   )
}

function LoadingTrack() {
   return (
      <>
         <div className='h-[64px] w-[64px] bg-zinc-100 dark:bg-zinc-900 animate-pulse' />

         <div className='flex flex-col justify-between flex-1 h-full'>
            <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse'></div>
            <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse'></div>
            <div className='rounded-sm h-4 bg-zinc-100 dark:bg-zinc-900 animate-pulse'></div>
         </div>
      </>
   )
}

async function TrackPlaying() {
   const accessToken = await getAccessToken({ cache: 'no-cache' })

   let track: Track | null = null
   let title = ''

   try {
      track = await getCurrentlyListening(accessToken)
      title = 'Currently playing'
   } catch (err) {
      try {
         const [result] = await getRecentlyPlayedTracks(accessToken, 1)

         track = result.track
         title = `Last played ${getTimeAgo(result.playedAt, true)}`
      } catch (err) {}
   }

   if (!track || !title) return null

   return (
      <>
         <Tooltip title={title} />

         <Image
            height={track.image.width}
            width={track.image.height}
            src={track.image.url}
            alt={track.title}
            className='w-16 h-16 object-cover'
         />

         <div className='flex flex-col'>
            <a
               href={track.songUrl}
               className={cn(link, 'font-semibold line-clamp-1')}
               target='_blank'
            >
               {track.title}
            </a>

            <Typography className='text-sm line-clamp-1 leading-normal'>
               {track.artists.map(({ name }) => name).join(', ')}
            </Typography>
            <Typography className='text-sm line-clamp-1 leading-normal'>
               {track.album}
            </Typography>
         </div>
      </>
   )
}

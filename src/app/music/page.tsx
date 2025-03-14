import type { Metadata } from 'next'
import cn from 'classnames'
import { CurrentlyListening } from '@/features/music/components/currently-listening'
import { TopTracks } from '@/features/music/components/top-tracks'
import { TopArtists } from '@/features/music/components/top-artists'

export const metadata: Metadata = {
   title: 'Music',
   description: 'My top tracks and artists.',
}

export default async function MusicPage() {
   return (
      <div className={cn('flex flex-col flex-1')}>
         <CurrentlyListening />

         <div className='w-full max-w-lg mx-auto order-2 lg:order-1 animate-fadeSm pb-24'>
            <TopTracks />
            <TopArtists />
         </div>
      </div>
   )
}

import { Typography } from '@/components/ui/typography'
import { getMusicData } from '@/features/music/api/get-music-data'
import {
   TrackItem,
   TrackItemSkeleton,
} from '@/features/music/components/track-item'
import { Suspense } from 'react'

export async function TopTracks() {
   return (
      <section>
         <Typography as='h1' variant='pageTitle' className='mb-8 lowercase'>
            Top Tracks
         </Typography>

         <ul className='flex flex-col gap-y-4'>
            <Suspense fallback={<TracksListSkeleton />}>
               <TracksList />
            </Suspense>
         </ul>
      </section>
   )
}

async function TracksList() {
   const { tracks } = await getMusicData()
   return tracks.map((track) => <TrackItem key={track.id} track={track} />)
}

function TracksListSkeleton() {
   const numbers = Array.from({ length: 10 }, (_, i) => i + 1)
   return numbers.map((n) => <TrackItemSkeleton key={n} />)
}

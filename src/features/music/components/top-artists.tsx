import { Typography } from '@/components/ui/typography'
import { getMusicData } from '@/features/music/api/get-music-data'
import {
   ArtistItem,
   ArtistItemSkeleton,
} from '@/features/music/components/artist-item'
import { Suspense } from 'react'

export async function TopArtists() {
   return (
      <section>
         <Typography as='h1' variant='pageTitle' className='my-8 lowercase'>
            Top Artists
         </Typography>

         <ul className='flex flex-col gap-y-4'>
            <Suspense fallback={<TopArtistsListSkeleton />}>
               <TopArtistsList />
            </Suspense>
         </ul>
      </section>
   )
}

async function TopArtistsList() {
   const { artists } = await getMusicData()
   return artists.map((a) => <ArtistItem artist={a} key={a.id} />)
}

function TopArtistsListSkeleton() {
   const numbers = Array.from({ length: 10 }, (_, i) => i + 1)
   return numbers.map((n) => <ArtistItemSkeleton key={n} />)
}

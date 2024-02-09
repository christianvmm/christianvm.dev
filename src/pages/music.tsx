import cn from 'classnames'
import { Head } from '@/components/Head'
import { GetStaticProps } from 'next'
import {
   type Artist,
   type Track,
   getTopArtists,
   getTopTracks,
   getAccessToken,
} from '@/lib/spotify'
import Image from 'next/image'
import { CurrentlyListening } from '@/features/music/components/CurrentlyListening'
import { link } from '@/styles'

type MusicProps = {
   artists: Artist[]
   tracks: Track[]
}

export default function Music({ artists, tracks }: MusicProps) {
   return (
      <>
         <Head title='music' description='My top tracks and artists.' />

         <div className={cn('flex flex-col flex-1')}>
            <CurrentlyListening />

            <section
               className={cn('w-full max-w-lg mx-auto order-2 lg:order-1')}
            >
               <div className='flex justify-between items-center mb-8'>
                  <h1 className='text-2xl font-semibold'>top tracks</h1>

                  <div className='flex gap-1 items-center'>
                     <p className='text-zinc-600 dark:text-zinc-400 text-xs'>
                        stats by spotify api
                     </p>

                     <Image
                        height={12}
                        width={12}
                        alt='Spotify'
                        src='/assets/music/spotify-icon.png'
                        className='w-3 h-3'
                     />
                  </div>
               </div>

               <ul className='flex flex-col gap-y-4'>
                  {tracks.map(
                     ({ artists, album, songUrl, title, image, id }) => (
                        <li
                           className='flex flex-row items-center space-x-4'
                           key={id}
                        >
                           <Image
                              height='64'
                              width='64'
                              src={image}
                              alt={title}
                           />

                           <div className='flex flex-col'>
                              <a
                                 href={songUrl}
                                 className={cn(link, ' font-semibold')}
                                 target='_blank'
                              >
                                 {title}
                              </a>

                              <p className='text-zinc-600 dark:text-zinc-400'>
                                 {artists.map(({ name }) => name).join(', ')}
                              </p>
                              <p className='text-zinc-600 dark:text-zinc-400'>
                                 {album}
                              </p>
                           </div>
                        </li>
                     )
                  )}
               </ul>

               <h1 className='text-2xl font-semibold my-8'>top artists</h1>

               <ul className='flex flex-col gap-y-4'>
                  {artists.map(({ name, url, image, followers, id }) => (
                     <li
                        className='flex flex-row items-center space-x-4'
                        key={id}
                     >
                        <Image width='64' height='64' src={image} alt={name} />

                        <div className='flex flex-col'>
                           <a
                              href={url}
                              className={cn(link, ' font-semibold')}
                              target='_blank'
                           >
                              {name}
                           </a>

                           <p className='text-zinc-600 dark:text-zinc-400'>
                              {followers} followers
                           </p>
                        </div>
                     </li>
                  ))}
               </ul>
            </section>
         </div>
      </>
   )
}

const AFTER_THREE_DAYS = 60 * 60 * 24 * 3
export const getStaticProps: GetStaticProps<MusicProps> = async () => {
   const accessToken = await getAccessToken()
   const artists = await getTopArtists(accessToken)
   const tracks = await getTopTracks(accessToken)

   return {
      props: {
         artists,
         tracks,
      },
      revalidate: AFTER_THREE_DAYS,
   }
}

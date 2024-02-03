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

type MusicProps = {
   artists: Artist[]
   tracks: Track[]
}

export default function Music({ artists, tracks }: MusicProps) {
   const link =
      'px-[0.1rem] font-semibold text-black dark:text-white transition-all underline underline-offset-2'

   return (
      <>
         <Head title='music' description='My top tracks and artists.' />

         <div className={cn('flex flex-col flex-1')}>
            <CurrentlyListening />

            <div className={cn('w-full max-w-lg mx-auto order-2 lg:order-1')}>
               <h1 className='text-2xl font-semibold mb-8'>top tracks</h1>

               <div className='flex flex-col gap-y-4'>
                  {tracks.map(
                     ({ artists, album, songUrl, title, image, id }) => (
                        <div
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
                                 className={link}
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
                        </div>
                     )
                  )}
               </div>

               <h1 className='text-2xl font-semibold my-8'>top artists</h1>

               <div className='flex flex-col gap-y-4'>
                  {artists.map(({ name, url, image, followers, id }) => (
                     <div
                        className='flex flex-row items-center space-x-4'
                        key={id}
                     >
                        <Image width='64' height='64' src={image} alt={name} />

                        <div className='flex flex-col'>
                           <a href={url} className={link} target='_blank'>
                              {name}
                           </a>

                           <p className='text-zinc-600 dark:text-zinc-400'>
                              {followers} followers
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
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

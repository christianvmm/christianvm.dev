import { CurrentlyListening } from '@/features/music/components/currently-listening'
import { getTopArtists, getTopTracks, getAccessToken } from '@/lib/spotify'
import { link } from '@/styles'
import { Typography } from '@/components/ui/typography'
import cn from 'classnames'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Music',
   description: 'My top tracks and artists.',
}

export const revalidate = 60 * 60 * 24

export default async function MusicPage() {
   const accessToken = await getAccessToken()
   const artists = await getTopArtists(accessToken)
   const tracks = await getTopTracks(accessToken)

   return (
      <div className={cn('flex flex-col flex-1')}>
         <CurrentlyListening accessToken={accessToken} />

         <section
            className={cn(
               'w-full max-w-lg mx-auto order-2 lg:order-1 animate-fadeSm pb-24'
            )}
         >
            <Typography as='h1' variant='pageTitle' className='mb-8'>
               top tracks
            </Typography>

            <ul className='flex flex-col gap-y-4'>
               {tracks.map(({ artists, album, songUrl, title, image, id }) => (
                  <li className='flex flex-row items-center space-x-4' key={id}>
                     <Image
                        height='64'
                        width='64'
                        className='w-16 h-16'
                        src={image}
                        alt={title}
                     />

                     <div className='flex flex-col flex-1'>
                        <a
                           href={songUrl}
                           className={cn(link, ' font-semibold line-clamp-1')}
                           target='_blank'
                        >
                           {title}
                        </a>

                        <Typography className='leading-normal line-clamp-1'>
                           {artists.map(({ name }) => name).join(', ')}
                        </Typography>

                        <Typography className='leading-normal line-clamp-1'>
                           {album}
                        </Typography>
                     </div>
                  </li>
               ))}
            </ul>

            <Typography as='h1' variant='pageTitle' className='my-8'>
               top artists
            </Typography>

            <ul className='flex flex-col gap-y-4'>
               {artists.map(({ name, url, image, followers, id }) => (
                  <li className='flex flex-row items-center space-x-4' key={id}>
                     <Image
                        width='64'
                        height='64'
                        className='w-16 h-16'
                        src={image}
                        alt={name}
                     />

                     <div className='flex flex-col flex-1'>
                        <a
                           href={url}
                           className={cn(link, ' font-semibold')}
                           target='_blank'
                        >
                           {name}
                        </a>

                        <Typography className='leading-normal'>
                           {followers} followers
                        </Typography>
                     </div>
                  </li>
               ))}
            </ul>
         </section>
      </div>
   )
}

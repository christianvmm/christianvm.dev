import { getAccessToken, getTopArtists, getTopTracks } from '@/lib/spotify'
import { unstable_cache } from 'next/cache'

export async function getMusicData() {
   const ONE_HOUR = 1000 * 60 * 60
   const key = Math.floor(new Date().valueOf() / ONE_HOUR).toString()

   return unstable_cache(async () => {
      const accessToken = await getAccessToken({ cache: 'no-cache' })

      const [artists, tracks] = await Promise.all([
         getTopArtists(accessToken),
         getTopTracks(accessToken),
      ])

      return { artists, tracks }
   }, [key])()
}

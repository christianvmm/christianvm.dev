import { formatTrack, trackModel } from '@/lib/spotify'
import { z } from 'zod'

const DEFAULT_MSG = 'Currently playing not available'
export async function getCurrentlyListening(accessToken: string) {
   let response

   try {
      const f = await fetch(
         'https://api.spotify.com/v1/me/player/currently-playing',

         {
            headers: {
               Authorization: `Bearer ${accessToken}`,
               Accept: 'application/json',
            },
            cache: 'no-cache',
         }
      )
      if (f.ok) {
         response = await f.json()
      } else {
         throw new Error(DEFAULT_MSG)
      }
   } catch {
      throw new Error(DEFAULT_MSG)
   }

   const { item } = z
      .object({
         item: trackModel,
      })
      .parse(response)

   return formatTrack(item)
}

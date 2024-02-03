import { formatTrack, trackModel } from '@/lib/spotify'
import { z } from 'zod'

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
         }
      )
      if (f.ok) {
         response = await f.json()
      } else {
         return {
            error: true,
         }
      }
   } catch {
      return {
         error: true,
      }
   }

   const { progress_ms, item } = z
      .object({
         progress_ms: z.number(),
         item: trackModel,
      })
      .parse(response)

   return {
      progressMs: progress_ms,
      track: formatTrack(item),
      error: false,
   }
}

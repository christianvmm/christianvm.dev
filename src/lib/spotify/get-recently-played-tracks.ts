import { z } from 'zod'
import { formatTrack, trackModel } from './get-top-tracks'

const DEFAULT_MSG = 'Error trying to get recently played tracks'
export async function getRecentlyPlayedTracks(accessToken: string, limit = 10) {
   let response

   try {
      const f = await fetch(
         `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
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
         throw new Error(DEFAULT_MSG)
      }
   } catch {
      throw new Error(DEFAULT_MSG)
   }

   const { items } = z
      .object({
         items: z.array(
            z.object({
               played_at: z.string(),
               track: trackModel,
            })
         ),
      })
      .parse(response)

   return items.map((item) => {
      return {
         playedAt: item.played_at,
         track: formatTrack(item.track),
      }
   })
}

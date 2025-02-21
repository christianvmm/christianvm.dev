import { z } from 'zod'

export type Track = {
   id: string
   artists: {
      name: string
   }[]
   songUrl: string
   title: string
   album: string
   image: string
}

export const trackModel = z.object({
   id: z.string(),
   artists: z.array(
      z.object({
         name: z.string(),
      })
   ),
   album: z.object({
      name: z.string(),
      images: z.array(
         z.object({
            url: z.string(),
         })
      ),
   }),
   external_urls: z.object({
      spotify: z.string(),
   }),
   name: z.string(),
})

export async function getTopTracks(accessToken: string): Promise<Track[]> {
   const data = await fetch(
      'https://api.spotify.com/v1/me/top/tracks?time_range=short_term',
      {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
         next: {
            revalidate: 3600,
         },
      }
   ).then((res) => res.json())

   const validationResult = z
      .object({
         items: z.array(trackModel),
      })
      .safeParse(data)

   if (!validationResult.success) {
      console.log(data)
      console.log(validationResult.error.errors)
      return []
   }

   return validationResult.data.items.slice(0, 10).map(formatTrack)
}

export function formatTrack(item: z.infer<typeof trackModel>) {
   return {
      id: item.id,
      artists: item.artists,
      songUrl: item.external_urls.spotify,
      title: item.name,
      album: item.album.name,
      image: item.album.images[0].url,
   }
}

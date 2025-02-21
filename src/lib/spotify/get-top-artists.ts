import { getFollowersByArtistId } from './get-followers-by-artist-id'
import { z } from 'zod'

export type Artist = {
   id: string
   name: string
   url: string
   image: string
   followers: string
}

export async function getTopArtists(accessToken: string): Promise<Artist[]> {
   const response = await fetch(
      'https://api.spotify.com/v1/me/top/artists?time_range=short_term',
      {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
         next: {
            revalidate: 3600,
         },
      }
   ).then((res) => res.json())

   try {
      const { items } = z
         .object({
            items: z.array(
               z.object({
                  id: z.string(),
                  name: z.string(),
                  images: z.array(
                     z.object({
                        url: z.string(),
                     })
                  ),
                  external_urls: z.object({
                     spotify: z.string(),
                  }),
                  followers: z.object({
                     total: z.number(),
                  }),
               })
            ),
         })
         .parse(response)

      const result = []

      for (let i = 0; i < 10; i++) {
         const item = items[i]
         const followers = await getFollowersByArtistId(
            item.external_urls.spotify.split('/')[
               item.external_urls.spotify.split('/').length - 1
            ],
            accessToken
         )

         result.push({
            id: item.id,
            name: item.name,
            url: item.external_urls.spotify,
            image: item.images[0].url,
            followers: followers.toLocaleString(),
         })
      }
      return result
   } catch (e) {
      console.log(e)
      return []
   }
}

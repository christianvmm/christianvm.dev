import { z } from 'zod'

export async function getFollowersByArtistId(id: string, accessToken: string) {
   const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
         Authorization: `Bearer ${accessToken}`,
      },
   }).then((res) => res.json())

   const { followers } = z
      .object({
         followers: z.object({
            total: z.number(),
         }),
      })
      .parse(response)

   return followers.total
}

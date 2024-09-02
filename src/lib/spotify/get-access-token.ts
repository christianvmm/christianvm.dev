import { z } from 'zod'

export async function getAccessToken(opts?: {
   cache: RequestCache
}): Promise<string> {
   const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN as string
   const clientId = process.env.SPOTIFY_CLIENT_ID as string
   const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string

   const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
         Authorization: `Basic ${Buffer.from(
            `${clientId}:${clientSecret}`
         ).toString('base64')}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
         grant_type: 'refresh_token',
         refresh_token: refreshToken,
      }),
      ...opts,
   })

   const { access_token } = z
      .object({
         access_token: z.string(),
      })
      .parse(await response.json())

   return access_token
}

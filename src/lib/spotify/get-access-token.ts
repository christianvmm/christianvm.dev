import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } from '@/consts'
import { z } from 'zod'

export async function getAccessToken(opts?: {
   cache: RequestCache
}): Promise<string> {
   const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
         Authorization: `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`
         ).toString('base64')}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
         grant_type: 'refresh_token',
         refresh_token: REFRESH_TOKEN,
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

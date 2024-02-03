import type { NextApiRequest, NextApiResponse } from 'next'
import { Track, getAccessToken, getCurrentlyListening } from '@/lib/spotify'
import { useEffect, useState } from 'react'
import { getRecentlyPlayedTracks } from '@/lib/spotify/getRecentlyPlayedTracks'
import { getTimeAgo } from '@/utils/formatDate'

let accessToken = ''

type ResponseData = {
   track?: Track
   title?: string
}

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<ResponseData>
) {
   let token

   if (accessToken) {
      token = accessToken
   } else {
      token = await getAccessToken()
      accessToken = token
   }

   try {
      const track = await getCurrentlyListening(token)
      res.status(200).json({ track, title: "What I'm currently listening to" })
   } catch (err) {
      try {
         const [{ playedAt, track }] = await getRecentlyPlayedTracks(token, 1)
         res.status(200).json({
            track,
            title: `I was listening to this ${getTimeAgo(playedAt, true)}`,
         })
      } catch (err) {
         res.status(409).json({})
      }
   }
}

export function useCurrentlyListening() {
   const [data, setData] = useState<ResponseData>()
   const [error, setError] = useState(false)
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      fetch('/api/getCurrentlyListening')
         .then(async (res) => {
            if (res.ok) {
               return res.json()
            } else {
               setError(true)
            }
         })
         .then(setData)
         .finally(() => {
            setIsLoading(false)
         })
   }, [])

   return {
      data,
      error,
      isLoading,
   }
}

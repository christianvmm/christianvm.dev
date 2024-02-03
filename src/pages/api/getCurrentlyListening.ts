import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccessToken, getCurrentlyListening } from '@/lib/spotify'
import { useEffect, useState } from 'react'

let accessToken = ''

type ResponseData = Awaited<ReturnType<Awaited<typeof getCurrentlyListening>>>

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
      const data = await getCurrentlyListening(token)
      res.status(200).json(data)
   } catch (err) {
      console.log(err)
      res.status(401)
   }
}

export function useCurrentlyListening() {
   const [data, setData] = useState<ResponseData>()
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      fetch('/api/getCurrentlyListening')
         .then((res) => res.json())
         .then(setData)
         .finally(() => {
            setIsLoading(false)
         })
   }, [])

   return {
      data,
      isLoading,
   }
}

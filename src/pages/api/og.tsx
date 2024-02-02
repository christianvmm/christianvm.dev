import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
   runtime: 'edge',
}

export default async function handler(request: NextRequest) {
   const { searchParams } = request.nextUrl
   const title = searchParams.get('title')
   const isPost = Boolean(searchParams.get('post'))

   let content

   if (isPost) {
      content = title
   } else if (title) {
      content = `christianvm.dev/${title}`
   }

   return new ImageResponse(
      (
         <div
            style={{
               display: 'flex',
               color: 'black',
               background: '#f6f6f6',
               width: '100%',
               height: '100%',
               paddingTop: 50,
               paddingLeft: 100,
               paddingRight: 100,
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               textAlign: 'center',
            }}
         >
            <img
               alt='Vercel icon'
               width='256'
               height='256'
               src={`https://github.com/vercel.png`}
               style={{
                  borderRadius: 128,
               }}
            />

            <p
               style={{
                  fontSize: 60,
               }}
            >
               {content}
            </p>
         </div>
      ),
      {
         width: 1200,
         height: 630,
      }
   )
}

import localFont from 'next/font/local'

export const pretendard = localFont({
   src: [
      {
         path: './subset/Pretendard-SemiBold.woff2',
         weight: '600',
         style: 'normal',
      },
      {
         path: './subset/Pretendard-Medium.woff2',
         weight: '500',
         style: 'normal',
      },
      {
         path: './subset/Pretendard-Regular.woff2',
         weight: '400',
         style: 'normal',
      },
   ],
})

import { Post } from '@/lib/blog'
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

export function PostItem({ post }: { post: Post }) {
   return (
      <li className='mb-6 group'>
         <Link className='flex flex-col space-y-1' href={`/blog/${post.slug}`}>
            <div className='w-full flex flex-col'>
               <p className='font-semibold'>{post.metadata.title}</p>

               <p className='text-zinc-600 dark:text-zinc-400'>
                  {formatDate(post.metadata.publishedAt, true)}
               </p>
            </div>
         </Link>

         <div className='relative top-full pointer-events-none hidden group-hover:block'>
            <div className='flex items-center absolute flex-column-reverse left-0 top-[6px]'>
               <div
                  role='dialog'
                  className='rounded-md bg-[rgb(37,37,37)] relative overflow-hidden'
                  style={{
                     maxWidth: 'calc(100vw-24px)',
                     boxShadow:
                        'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px',
                  }}
               >
                  <div>
                     <div className='w-[260px]'>
                        <div className='h-[36px]'></div>

                        <div className='flex items-center justify-center h-[26px] w-[26px] rounded-md flex-shrink-0 relative ml-4 mt-[-15px] mb-2'>
                           <span role='img'>
                              <svg
                                 role='graphics-symbol'
                                 viewBox='0 0 16 16'
                                 className='page w-[26px] h-[26px] block fill-zinc-400 flex-shrink-0'
                              >
                                 <path d='M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z'></path>
                              </svg>
                           </span>
                        </div>

                        <div className='flex flex-col gap-1 px-4'>
                           <div className='flex flex-col gap-[2px]'>
                              <div
                                 className='text-xs text-[rgb(90,90,90)] whitespace-nowrap
                              overflow-hidden text-ellipsis mb-[-2px]
                           '
                              >
                                 <span>Post</span>
                              </div>

                              <div className='overflow-hidden'>
                                 <span className='inline overflow-hidden font-semibold text-white text-sm'>
                                    {post.metadata.title}
                                 </span>
                              </div>
                           </div>

                           <div className='h-[86px] relative pointer-events-none overflow-hidden mb-4'>
                              <div className='h-full w-full'>
                                 {post.metadata.image ? (
                                    <Image
                                       width='226'
                                       height='86'
                                       alt='Image'
                                       loading='lazy'
                                       src='/assets/setup/setup.png'
                                       className='block object-cover rounded-md w-full h-[86px]'
                                       style={{
                                          border:
                                             '1px solid rgba(255,255,255,0.13)',
                                          objectPosition: 'center',
                                       }}
                                    />
                                 ) : (
                                    <p className='text-xs'>{post.content}</p>
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </li>
   )
}

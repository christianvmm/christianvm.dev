import Link from 'next/link'
import cn from 'classnames'
import { Head } from '@/components/Head'
import { GetStaticProps } from 'next'
import { Post, getBlogPosts } from '@/lib/blog'
import { formatDate } from '@/utils/formatDate'

type BlogProps = {
   posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
   return (
      <>
         <Head
            title='blog'
            description='Thoughts on software development and random stuff. I mostly code in React and TypeScript.'
         />

         <div className={cn('flex-1 max-w-lg mx-auto')}>
            <h1 className='text-2xl font-semibold mb-8'>blog</h1>

            {posts
               .sort((a, b) => {
                  if (
                     new Date(a.metadata.publishedAt) >
                     new Date(b.metadata.publishedAt)
                  ) {
                     return -1
                  }
                  return 1
               })
               .map((post) => (
                  <Link
                     key={post.slug}
                     className='flex flex-col space-y-1 mb-6'
                     href={`/blog/${post.slug}`}
                  >
                     <div className='w-full flex flex-col'>
                        <p className='font-semibold'>{post.metadata.title}</p>

                        <p className='text-zinc-600 dark:text-zinc-400'>
                           {formatDate(post.metadata.publishedAt, true)}
                        </p>
                     </div>
                  </Link>
               ))}
         </div>
      </>
   )
}

export const getStaticProps: GetStaticProps<BlogProps> = () => {
   const posts = getBlogPosts()

   return {
      props: {
         posts,
      },
   }
}

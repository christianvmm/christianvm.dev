import { Head } from '@/components/Head'
import { GetStaticProps } from 'next'
import { Post, getBlogPosts } from '@/lib/blog'
import { PostItem } from '@/features/blog/components/PostItem'
import { Typography } from '@/components/Typography'

type BlogProps = {
   posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
   return (
      <>
         <Head
            title='Blog'
            description='Thoughts on software development and random stuff. I mostly code in React and TypeScript.'
            og='/assets/blog/og.png'
         />

         <div className='flex-1 max-w-lg mx-auto animate-fadeSm pb-24'>
            <Typography as='h1' variant='pageTitle' className='mb-8'>
               blog
            </Typography>

            <ul>
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
                     <PostItem key={post.slug} post={post} />
                  ))}
            </ul>
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

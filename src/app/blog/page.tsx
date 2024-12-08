import { getBlogPosts } from '@/lib/blog'
import { Typography } from '@/components/ui/typography'
import { PostItem } from '@/features/blog/components/post-item'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Blog',
   description:
      'Thoughts on software development and random stuff. I mostly code in React and TypeScript.',
}

export default function Blog() {
   const posts = getBlogPosts()

   return (
      <div className='flex-1 max-w-lg mx-auto animate-fadeSm pb-24'>
         <Typography as='h1' variant='pageTitle' className='mb-8 lowercase'>
            Blog
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
   )
}

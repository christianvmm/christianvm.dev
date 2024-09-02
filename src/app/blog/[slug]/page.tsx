import { CustomMDX } from '@/components/mdx'
import { formatDate } from '@/utils/format-date'
import { notFound } from 'next/navigation'
import { getBlogPosts } from '@/lib/blog'
import { Typography } from '@/components/ui/typography'
import { Views } from '@/features/blog/components/views'
import cn from 'classnames'
import type { Metadata } from 'next'
import { Suspense } from 'react'

type PostProps = {
   params: {
      slug?: string
   }
}

export function generateMetadata({ params }: PostProps): Metadata {
   const post = getBlogPosts().find((p) => p.slug === params?.slug)

   if (!post) notFound()

   return {
      title: {
         absolute: post.metadata.title,
      },
      description: post.metadata.summary,
      openGraph: {
         type: 'article',
         title: post.metadata.title,
         description: post.metadata.summary,
         publishedTime: post.metadata.publishedAt,
         images: [post.metadata.og],
      },
   }
}

export default async function PostPage({ params }: PostProps) {
   const post = getBlogPosts().find((p) => p.slug === params?.slug)

   if (!post) notFound()

   return (
      <>
         <script
            type='application/ld+json'
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
               __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'BlogPosting',
                  headline: post.metadata.title,
                  datePublished: post.metadata.publishedAt,
                  dateModified: post.metadata.publishedAt,
                  description: post.metadata.summary,
                  image: post.metadata.image
                     ? `https://christianvm.dev${post.metadata.image}`
                     : `https://christianvm.dev/og?title=${post.metadata.title}`,
                  url: `https://christianvm.dev/blog/${post.slug}`,
                  author: {
                     '@type': 'Person',
                     name: 'Christian Velez Medina',
                  },
               }),
            }}
         />

         <section
            className={cn('max-w-lg mx-auto flex-1 animate-fadeSm pb-24')}
         >
            <header className='mb-8 space-y-1'>
               <Typography as='h1' variant='pageTitle'>
                  {post.metadata.title}
               </Typography>

               <div className='flex justify-between'>
                  <Typography>
                     {formatDate(post.metadata.publishedAt)}
                  </Typography>

                  <Suspense fallback={null}>
                     <Views slug={post.slug} />
                  </Suspense>
               </div>
            </header>

            <article className='post'>
               <CustomMDX source={post.content} />
            </article>
         </section>
      </>
   )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
   const posts = getBlogPosts()

   return posts.map((post) => ({
      slug: post.slug,
   }))
}

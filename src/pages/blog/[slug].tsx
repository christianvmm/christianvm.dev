import { Head } from '@/components/Head'
import { CustomMDX } from '@/components/mdx'
import { type Post, getBlogPosts } from '@/lib/blog'
import { formatDate } from '@/utils/formatDate'
import { GetStaticPaths, GetStaticProps } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import cn from 'classnames'
import hljs from 'highlight.js'
import { useEffect } from 'react'
import 'highlight.js/styles/nord.css'
import { Typography } from '@/components/Typography'

type PostProps = {
   post: Omit<Post, 'content'> & {
      content: MDXRemoteSerializeResult
   }
}

export default function PostPage({ post }: PostProps) {
   useEffect(() => {
      hljs.highlightAll()
   }, [])

   return (
      <>
         <Head
            title={post.metadata.title}
            description={post.metadata.summary}
            og={post.metadata.og}
            post
         />

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

         <section className={cn('max-w-lg mx-auto flex-1 animate-fadeSm')}>
            <header className='mb-8 space-y-1'>
               <Typography as='h1' variant='pageTitle'>
                  {post.metadata.title}
               </Typography>

               <Typography>{formatDate(post.metadata.publishedAt)}</Typography>
            </header>

            <article className='post'>
               {post.content && <CustomMDX {...post.content} />}
            </article>
         </section>
      </>
   )
}

export const getStaticPaths: GetStaticPaths = () => {
   const posts = getBlogPosts()
   const paths = posts.map((post) => ({
      params: {
         slug: post.slug,
      },
   }))

   return {
      paths,
      fallback: false,
   }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
   const post = getBlogPosts().find((p) => p.slug === params?.slug) as Post
   const mdxContent = await serialize(post!.content)

   return {
      props: {
         post: {
            ...post,
            content: mdxContent,
         },
      },
   }
}

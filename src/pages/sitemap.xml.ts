import { type Post, getBlogPosts } from '@/lib/blog'
import { GetServerSideProps } from 'next'

function generateSiteMap(posts: Post[]) {
   const date = new Date()
   const lastmod = `${date.toISOString().split('T')[0]}`
   const domain = 'https://www.christianvm.dev'

   return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
         <loc>${domain}</loc>
         <lastmod>${lastmod}</lastmod>
      </url>

      <url>
         <loc>${domain}/music</loc>
         <lastmod>${lastmod}</lastmod>
      </url>

      <url>
         <loc>${domain}/blog</loc>
         <lastmod>${lastmod}</lastmod>
      </url>
      
      ${posts
         .map(({ slug, metadata }) => {
            return `
         <url>
            <loc>${`${domain}/blog/${slug}`}</loc>
            <lastmod>${metadata.publishedAt}</lastmod>
         </url>
      `
         })
         .join('')}
   </urlset>
 `
}

function SiteMap() {
   // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   // We make an API call to gather the URLs for our site
   const posts = getBlogPosts()

   // We generate the XML sitemap with the posts data
   const sitemap = generateSiteMap(posts)

   res.setHeader('Content-Type', 'text/xml')
   res.write(sitemap)
   res.end()

   return {
      props: {},
   }
}

export default SiteMap

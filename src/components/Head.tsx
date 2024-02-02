import NextHead from 'next/head'

type HeadProps = {
   title: string
   description?: string
   post?: boolean
}

export function Head({ title, description, post }: HeadProps) {
   let ogImg = 'https://www.christianvm.dev/api/og'
   const desc =
      description || 'Personal website and blog of Christian Velez Medina.'
   const pageTitle = post ? title : `christianvm • ${title}`

   if (title !== 'home') {
      ogImg += `?title=${title}`
   }

   if (post) {
      ogImg += `&post=true`
   }

   return (
      <NextHead>
         <meta property='twitter:image' content={ogImg} />
         <meta property='twitter:card' content='summary_large_image' />
         <meta property='twitter:title' content={pageTitle} />
         <meta property='twitter:description' content={desc} />

         <meta property='og:type' content='website' />
         <meta property='og:site_name' content='Christian Velez Medina' />
         <meta property='og:url' content='https://www.christianvm.dev/' />
         <meta property='og:title' content={pageTitle} />
         <meta property='og:description' content={desc} />
         <meta property='og:image' content={ogImg} />

         <title>{pageTitle}</title>
         <link rel='icon' type='image/x-icon' href='/favicon.ico' />
         <meta name='description' content={desc} />
         <meta name='keywords' content='Christian Velez Medina, christianvm' />
         <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='/sitemap.xml'
         />
      </NextHead>
   )
}

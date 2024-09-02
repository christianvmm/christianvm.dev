import NextHead from 'next/head'

type HeadProps = {
   title: string
   description: string
   post?: boolean
   og?: string
}

export function Head({ title, description, post, og }: HeadProps) {
   let pageTitle

   if (post) {
      pageTitle = title
   } else if (title === 'Home') {
      pageTitle = 'Christian Velez Medina'
   } else {
      pageTitle = `${title} · Christian Velez Medina`
   }

   if (!og) {
      og = '/assets/home/og.png'
   }

   og = `${process.env.NEXT_PUBLIC_SITE_URL}${og}`

   return (
      <NextHead>
         <meta property='twitter:image' content={og} />
         <meta property='twitter:card' content='summary_large_image' />
         <meta property='twitter:title' content={pageTitle} />
         <meta property='twitter:description' content={description} />

         <meta property='og:type' content='website' />
         <meta property='og:site_name' content='Christian Velez Medina' />
         <meta property='og:url' content='https://www.christianvm.dev/' />
         <meta property='og:title' content={pageTitle} />
         <meta property='og:description' content={description} />
         <meta property='og:image' content={og} />

         <title>{pageTitle}</title>
         <link rel='icon' type='image/x-icon' href='/favicon.ico' />
         <meta name='description' content={description} />
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

import { Typography } from '@/components/ui/typography'
import { UIItem } from '@/features/ui/components/ui-item'
import { getUIComponents } from '@/features/ui/utils/get-ui-components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'UI',
   description:
      'A curated list of React UI components styled with Tailwind CSS.',
}

export default async function UI() {
   const componentsWithCode = await getUIComponents()

   return (
      <div className='flex-1 max-w-lg mx-auto animate-fadeSm pb-24'>
         <Typography as='h1' variant='pageTitle' className='mb-8 lowercase'>
            UI
         </Typography>

         <Typography className='mb-20'>
            A collection of UI components that I find interesting or inspiring.
            Whenever possible, I include source code and links to the original
            sources for reference. Feel free to explore and adapt them to your
            own projects!
         </Typography>

         <ul className='flex flex-col w-full gap-24'>
            {componentsWithCode.map(({ title, code, src, Component }, i) => {
               return (
                  <UIItem key={i} title={title} code={code} src={src}>
                     <Component />
                  </UIItem>
               )
            })}
         </ul>
      </div>
   )
}

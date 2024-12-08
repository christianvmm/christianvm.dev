import { Typography } from '@/components/ui/typography'
import { UIItem } from '@/features/ui/components/ui-item'
import { getUIComponents } from '@/features/ui/utils/get-ui-components'
import { link } from '@/styles'
import { cn } from '@/utils/cn'
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
            A curated list of UI components I&apos;ve come across on Twitter.
            I&apos;ve recreated them using React and TailwindCSS, keeping the
            design as close as possible to the original. I&apos;ve also included
            links to the sources to give credit where it&apos;s due. Feel free
            to copy the code—just make sure you&apos;ve got Tailwind set up and{' '}
            <a
               href='https://lucide.dev/guide/packages/lucide-react'
               className={cn(link)}
               target='_blank'
            >
               lucide-react
            </a>{' '}
            installed first!
         </Typography>

         {componentsWithCode.map(({ title, code, src, Component }, i) => {
            return (
               <UIItem key={i} title={title} code={code} src={src}>
                  <Component />
               </UIItem>
            )
         })}
      </div>
   )
}

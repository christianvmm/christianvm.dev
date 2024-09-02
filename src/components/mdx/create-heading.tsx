import { Typography } from '@/components/ui/typography'

export function createHeading(as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') {
   const Heading = ({ children }: { children: React.ReactNode }) => {
      return (
         <Typography as={as} variant='subtitle' className='mt-6'>
            {children}
         </Typography>
      )
   }

   return Heading
}

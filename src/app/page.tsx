import {
   Experience,
   Introduction,
   Projects,
   Stack,
} from '@/features/home/components'

export default function HomePage() {
   return (
      <>
         {/* <Head
            title='Home'
            description='Personal website and blog of Christian Velez Medina.'
            og='/assets/home/og.png'
         /> */}

         <div className='max-w-lg mx-auto flex flex-col gap-20 pb-24 animate-fadeSm'>
            <Introduction />
            <Experience />
            <Projects />
            <Stack />
         </div>
      </>
   )
}

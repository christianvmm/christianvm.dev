import { Head } from '@/components/Head'
import {
   Experience,
   Introduction,
   Projects,
   Stack,
} from '@/features/home/components'

export default function Home() {
   return (
      <>
         <Head title='Home' />

         <div className='max-w-lg mx-auto flex flex-col gap-24 pb-24 animate-fadeXl'>
            <Introduction />
            <Experience />
            <Projects />
            <Stack />
         </div>
      </>
   )
}

import { Head } from '@/components/Head'
import { Experience, Header, Projects, Stack } from '@/features/home/components'

export const supperof = '#71717A text-zinc-500'
export const imagesBackground = '#F4F4F5 / white   dark:#111113'

export default function Home() {
   return (
      <>
         <Head title='home' />

         <div className='max-w-lg mx-auto flex flex-col gap-24 pb-10'>
            <Header />
            <Experience />
            <Projects />
            <Stack />
         </div>
      </>
   )
}

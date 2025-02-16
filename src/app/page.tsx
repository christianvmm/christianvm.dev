import {
   Education,
   Experience,
   Introduction,
   Projects,
   Stack,
} from '@/features/homepage/components'

export default function HomePage() {
   return (
      <div className='max-w-lg mx-auto flex flex-col gap-20 pb-24 animate-fadeSm'>
         <Introduction />
         <Experience />
         <Education />
         <Projects />
         <Stack />
      </div>
   )
}

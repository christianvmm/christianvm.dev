import {
   FileTextIcon,
   HomeIcon,
   InstagramIcon,
   TwitterIcon,
} from 'lucide-react'

export function MenuBar() {
   return (
      <div className='border border-zinc-200 dark:border-zinc-900 rounded-2xl p-2 flex items-center'>
         <Link href='#a' label='Home'>
            <HomeIcon className='h-4 w-4' />
         </Link>

         <div className='w-[1px] mx-3 bg-zinc-200 dark:bg-zinc-900 h-5' />

         <Link href='#a' label='Twitter'>
            <TwitterIcon className='h-4 w-4' />
         </Link>

         <Link href='#a' label='Instagram'>
            <InstagramIcon className='h-4 w-4' />
         </Link>

         <Link href='#a' label='My CV'>
            <FileTextIcon className='h-4 w-4 rotate-12' />
         </Link>

         <div className='w-[1px] mx-3 bg-zinc-200 dark:bg-zinc-900 h-5' />

         <button className='py-3 px-5 text-sm bg-zinc-950 dark:bg-white dark:text-zinc-950 hover:opacity-75 hover:px-[1.35rem] transition-all rounded-xl text-white'>
            Book a Call
         </button>
      </div>
   )
}

function Link({
   href,
   label,
   children,
}: {
   href: string
   label: string
   children: React.ReactNode
}) {
   return (
      <Tooltip label={label}>
         <a
            className='p-3 hover:px-4 sm:p-4 sm:hover:px-5 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all block rounded-xl'
            href={href}
         >
            {children}
         </a>
      </Tooltip>
   )
}

function Tooltip({
   label,
   children,
}: {
   label: string
   children?: React.ReactNode
}) {
   return (
      <div className='relative group'>
         {children}

         <span
            role='tooltip'
            className='opacity-0 font-normal group-hover:opacity-100 delay-75 scale-90 group-hover:scale-100 pointer-events-none transition-all duration-100 ease-out absolute text-sm px-2 py-1 rounded-lg bg-black z-[99] text-white dark:bg-white dark:text-black -bottom-10 left-1/2 -translate-x-1/2 blur-md group-hover:blur-none'
         >
            <span className='z-50 relative truncate'> {label} </span>
         </span>
      </div>
   )
}

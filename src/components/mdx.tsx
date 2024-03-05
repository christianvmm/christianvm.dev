import React from 'react'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { CopyIcon } from '@/icons'
import { toast } from 'sonner'
import { cn } from '@/utils/cn'
import { link } from '@/styles'

type TableProps = {
   data: {
      headers: string[]
      rows: string[][]
   }
}

function Table({ data }: TableProps) {
   let headers = data.headers.map((header, index) => (
      <th key={index}>{header}</th>
   ))
   let rows = data.rows.map((row, index) => (
      <tr key={index}>
         {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
         ))}
      </tr>
   ))

   return (
      <table>
         <thead>
            <tr>{headers}</tr>
         </thead>
         <tbody>{rows}</tbody>
      </table>
   )
}

function CustomLink(props: {
   href: string
   children: string
   className: string
}) {
   const { href, className, ...rest } = props

   if (href.startsWith('/')) {
      return (
         <Link
            href={href}
            {...rest}
            className={cn(link, 'font-medium', className)}
         >
            {props.children}
         </Link>
      )
   }

   if (href.startsWith('#')) {
      return <a {...props} />
   }

   return (
      <a
         href={href}
         target='_blank'
         rel='noopener noreferrer'
         className={cn(link, 'font-medium', className)}
         {...rest}
      />
   )
}

type CustomImageProps = ImageProps & {
   alt: string
   src: string
}

function CustomImage({ alt, ...props }: CustomImageProps) {
   return <Image alt={alt} {...props} />
}

function Callout(props: { emoji: string; children: React.ReactNode }) {
   return (
      <div className='px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8'>
         <div className='flex items-center w-4 mr-4'>{props.emoji}</div>
         <div className='w-full callout'>{props.children}</div>
      </div>
   )
}

function ProsCard({ title, pros }: { title: string; pros: string[] }) {
   return (
      <div className='border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full'>
         <span>{`You might use ${title} if...`}</span>
         <div className='mt-4'>
            {pros.map((pro) => (
               <div key={pro} className='flex font-medium items-baseline mb-2'>
                  <div className='h-4 w-4 mr-2'>
                     <svg
                        className='h-4 w-4 text-emerald-500'
                        viewBox='0 0 24 24'
                     >
                        <g
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                           <path d='M22 4L12 14.01l-3-3' />
                        </g>
                     </svg>
                  </div>
                  <span>{pro}</span>
               </div>
            ))}
         </div>
      </div>
   )
}

function ConsCard({ title, cons }: { title: string; cons: string[] }) {
   return (
      <div className='border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full'>
         <span>{`You might not use ${title} if...`}</span>
         <div className='mt-4'>
            {cons.map((con) => (
               <div key={con} className='flex font-medium items-baseline mb-2'>
                  <div className='h-4 w-4 mr-2'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='h-4 w-4 text-red-500'
                     >
                        <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
                     </svg>
                  </div>
                  <span>{con}</span>
               </div>
            ))}
         </div>
      </div>
   )
}

function CodeBlock({
   children,
   ...props
}: React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLPreElement>,
   HTMLPreElement
> & {
   children: React.JSX.Element
}) {
   function copyCode() {
      if (!children) return

      if (typeof children.props.children === 'string') {
         navigator.clipboard.writeText(children.props.children)
         toast.success('Code copied successfully')
      }
   }

   return (
      <pre
         className='dark:selection:bg-zinc-800 text-sm h-full rounded-md font-mono flex flex-col justify-between  bg-[#111113]'
         {...props}
      >
         <div className='flex w-full justify-between p-3 pb-0'>
            <div className='window-btns'>
               <div className='window-btn close'></div>
               <div className='window-btn minimize'></div>
               <div className='window-btn expand'></div>
            </div>

            <button
               aria-label='Copy code'
               onClick={() => copyCode()}
               className='text-white'
            >
               <CopyIcon />
            </button>
         </div>

         {children}
      </pre>
   )
}

// Article subtitle
// function Title({ children, href }: { children: string; href: string }) {
//    return (
//       <h1 className='font-semibold text-xl mb-4'>
//          <a href={href} className='hover:text-blue-400 group'>
//             {children}
//             <span className='inline-flex opacity-0 ml-2 group-hover:opacity-100'>
//                <svg viewBox='0 0 16 16' height='0.7em' width='0.7em'>
//                   <g strokeWidth='1.2' fill='none' stroke='currentColor'>
//                      <path
//                         fill='none'
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeMiterlimit='10'
//                         d='M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698'
//                      ></path>
//                      <path
//                         fill='none'
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeMiterlimit='10'
//                         d='M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698'
//                      ></path>
//                   </g>
//                </svg>
//             </span>
//          </a>
//       </h1>
//    )
// }

function Code({
   className,
   ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
   children: string
}) {
   return (
      <code
         className={cn(className, 'overflow-x-scroll p-3 pt-0  rounded-md ')}
         {...props}
      />
   )
}

let components = {
   Image: CustomImage,
   a: CustomLink,
   Callout,
   ProsCard,
   ConsCard,
   code: Code,
   pre: CodeBlock,
   Table,
}

export function CustomMDX(props: any) {
   return (
      <MDXRemote
         {...props}
         components={{ ...components, ...(props.components || {}) }}
      />
   )
}

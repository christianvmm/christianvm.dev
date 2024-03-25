import React, { useState } from 'react'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { CheckIcon, CopyIcon } from '@/icons'
import { cn } from '@/utils/cn'
import { link } from '@/styles'
import { Typography } from '@/components/Typography'
import { useIsMounted } from '@/hooks'

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
         <Link href={href} {...rest} className={cn(link, className)}>
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
         className={cn(link, className)}
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
   const [copied, setCopied] = useState(false)
   const mounted = useIsMounted()

   async function copyCode() {
      if (!children) return

      if (typeof children.props.children === 'string') {
         await navigator.clipboard.writeText(children.props.children)
         setCopied(true)

         setTimeout(() => {
            if (mounted.current) {
               setCopied(false)
            }
         }, 1000)
      }
   }

   return (
      <pre
         className='dark:selection:bg-zinc-800 text-sm h-full font-mono flex flex-col justify-between bg-zinc-900 dark:bg-zinc-900/70'
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
               className='text-white  p-2 rounded-md hover:bg-zinc-700 transition-colors'
            >
               {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
         </div>

         {children}
      </pre>
   )
}

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

function createHeading(as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') {
   const Heading = ({ children }: { children: React.ReactNode }) => {
      return (
         <Typography as={as} variant='subtitle' className='mt-6'>
            {children}
         </Typography>
      )
   }

   return Heading
}

function CustomP({ children, ...props }: React.ComponentPropsWithoutRef<'p'>) {
   if (
      React.isValidElement<{ children: React.ReactNode }>(children) &&
      children.props.children
   ) {
      children = children.props.children
   }

   return <Typography {...props}>{children}</Typography>
}

let components = {
   h1: createHeading('h1'),
   h2: createHeading('h2'),
   h3: createHeading('h3'),
   h4: createHeading('h4'),
   h5: createHeading('h5'),
   h6: createHeading('h6'),
   Image: CustomImage,
   a: CustomLink,
   p: CustomP,
   Typography: CustomP,
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

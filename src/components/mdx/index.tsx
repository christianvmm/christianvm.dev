import { MDXRemote } from 'next-mdx-remote/rsc'
import { createHeading } from './create-heading'
import { CustomImage } from './custom-image'
import { CustomLink } from './custom-link'
import { CustomP } from './custom-p'
import { Code } from './code'
import { CodeBlock } from './code-block'
import { Table } from './table'

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

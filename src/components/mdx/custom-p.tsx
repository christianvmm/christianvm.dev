import { Typography } from '@/components/ui/typography'
import React from 'react'

export function CustomP({
   children,
   ...props
}: React.ComponentPropsWithoutRef<'p'>) {
   if (
      React.isValidElement<{ children: React.ReactNode }>(children) &&
      children.props.children
   ) {
      children = children.props.children
   }

   return <Typography {...props}>{children}</Typography>
}

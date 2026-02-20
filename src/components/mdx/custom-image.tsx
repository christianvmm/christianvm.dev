import Image, { type ImageProps } from 'next/image'

type CustomImageProps = ImageProps & {
   alt: string
   src: string
}

export function CustomImage({ alt, ...props }: CustomImageProps) {
  console.log("alt", alt)
  console.log("props", props)
  
   return <Image alt={alt} {...props} />
}

import Image, { type ImageProps } from 'next/image'

type CustomImageProps = ImageProps & {
   alt: string
   src: string
}

export function CustomImage({ alt, ...props }: CustomImageProps) {
   return <Image alt={alt} {...props} />
}

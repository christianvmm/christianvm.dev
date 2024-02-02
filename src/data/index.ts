export const links = [
   {
      href: '#estradata',
      title: 'Estradata',
      imgSrc: '/assets/home/estradata-logo.svg',
   },
]

export function getLogo(title: string): string {
   return links.find((link) => link.title === title)?.imgSrc ?? ''
}

import { incrementPostViews } from '@/features/blog/actions/increment-post-views'
import { unstable_noStore } from 'next/cache'

export const dynamic = 'force-dynamic'

export async function Views({ slug }: { slug: string }) {
   unstable_noStore()

   await incrementPostViews(slug)

   return null
}

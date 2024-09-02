import { supabase } from '@/utils/supabase'

export async function incrementPostViews(slug: string) {
   const post = await supabase
      .from('blog_posts')
      .select('view_count')
      .eq('slug', slug)
      .single()

   if (!post.data) return

   console.log('wtf')

   supabase
      .from('blog_posts')
      .update({
         view_count: (post.data.view_count ?? 0) + 1,
      })
      .eq('slug', slug)
}

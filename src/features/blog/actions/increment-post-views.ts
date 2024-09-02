import { supabase } from '@/utils/supabase'

export async function incrementPostViews(slug: string) {
   const post = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()

   if (!post.data) return

   const newCount = (post.data.view_count || 0) + 1

   await supabase
      .from('blog_posts')
      .update({
         view_count: newCount,
      })
      .eq('slug', slug)
      .select()
}

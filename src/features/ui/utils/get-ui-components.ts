import { promises as fs } from 'fs'
import { MenuBar } from '@/features/ui/components/menu-bar'

const components = [
   {
      title: 'Menu Bar',
      src: 'https://x.com/WHOISHOSSEINAM/status/1865042861772648855',
      code: '',
      filename: 'menu-bar.tsx',
      Component: MenuBar,
   },
]

export async function getUIComponents() {
   return await Promise.all(
      components.map(async (component) => {
         let code = ''
         try {
            code = await fs.readFile(
               process.cwd() +
                  '/src/features/ui/components/' +
                  component.filename,
               'utf8'
            )
         } catch {}

         return {
            ...component,
            code,
         }
      })
   )
}

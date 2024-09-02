import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'

export function Portal({ children }: { children: React.ReactNode }) {
   const [domLoaded, setDomLoaded] = useState(false)

   useEffect(() => {
      setDomLoaded(true)
   }, [])

   if (!domLoaded) {
      return null
   }

   const root = document.getElementById('root')

   if (!root) {
      return null
   }

   return ReactDOM.createPortal(children, root)
}

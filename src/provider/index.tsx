'use client'
import { ThemeProvider } from 'next-themes'

export function AppProvider({ children }: { children: React.ReactNode }) {
   return (
      <ThemeProvider
         attribute='class'
         enableSystem={true}
         defaultTheme='system'
      >
         {children}
      </ThemeProvider>
   )
}

// import { Theme, useTheme } from '@/components/ToggleTheme/useTheme'
// import { createContext, useContext } from 'react'

// type AppContextT = {
//    theme: Theme
//    toggleTheme: () => void
// }

// const AppContext = createContext<AppContextT>({
//    theme: 'light',
//    toggleTheme: () => {},
// })

// export function useAppContext() {
//    return useContext(AppContext)
// }

// export function AppProvider({ children }: { children: React.ReactNode }) {
//    const [theme, toggleTheme] = useTheme()

//    return (
//       <AppContext.Provider
//          value={{
//             theme,
//             toggleTheme,
//          }}
//       >
//          {children}
//       </AppContext.Provider>
//    )
// }

import { createContext, ReactNode, useContext } from 'react'

export type MenuContextProviderProps = {
  value: any
  children: ReactNode
}

const MenuContext = createContext<undefined>(undefined)

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu muse be used within a MenuProvider')
  }
  return context
}

export const MenuContextProvider = ({ value, children }: MenuContextProviderProps) => {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

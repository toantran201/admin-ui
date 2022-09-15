import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Sidebar = {
  expand: boolean
}

const CustomSidebarContext = createContext<
  | {
      customSidebar: Sidebar
      toggleSidebar: () => void
    }
  | undefined
>(undefined)

export const useCustomSidebar = () => {
  const customSidebarContext = useContext(CustomSidebarContext)
  if (!customSidebarContext) {
    throw new Error('Please use useCustomSidebar inside the CustomSidebarProvider')
  }
  return customSidebarContext
}

type CustomSidebarProviderProps = {
  children: ReactNode
}

export const CustomSidebarProvider = ({ children }: CustomSidebarProviderProps) => {
  const [sideBar, setSidebar] = useState<Sidebar>({
    expand: false,
  })

  useEffect(() => {
    document.documentElement.dataset.sidebar = sideBar.expand ? 'large' : 'small'
  }, [sideBar.expand])

  const toggleSidebar = () => {
    setSidebar((prevState) => ({
      ...prevState,
      expand: !prevState.expand,
    }))
  }

  return (
    <CustomSidebarContext.Provider
      value={{
        customSidebar: sideBar,
        toggleSidebar,
      }}
    >
      {children}
    </CustomSidebarContext.Provider>
  )
}

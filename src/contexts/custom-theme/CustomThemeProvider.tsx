import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
//
import { Theme } from '~/types'

type CustomThemeProviderProps = {
  children: ReactNode
  initTheme: Theme
}

const CustomThemeContext = createContext<
  | {
      customTheme: Theme
      updateThemeColor: (color: string) => void
      updateThemeMode: (mode: 'dark' | 'light') => void
    }
  | undefined
>(undefined)

export const useCustomTheme = () => {
  const customThemeContext = useContext(CustomThemeContext)
  if (!customThemeContext) {
    throw new Error('Please use useCustomTheme inside the CustomThemeProvider')
  }
  return customThemeContext
}

export const CustomThemeProvider = (props: CustomThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(props.initTheme)

  useEffect(() => {
    document.documentElement.dataset.color = theme.color
    document.documentElement.dataset.mode = theme.mode

    window.localStorage.setItem('color', theme.color)
    window.localStorage.setItem('mode', theme.mode)
  }, [theme])

  const updateThemeColor = (color: string) => {
    setTheme((prev) => ({
      ...prev,
      color: color,
    }))
  }

  const updateThemeMode = (mode: 'dark' | 'light') => {
    setTheme((prev) => ({
      ...prev,
      mode: mode,
    }))
  }

  return (
    <CustomThemeContext.Provider
      value={{
        customTheme: theme,
        updateThemeColor,
        updateThemeMode,
      }}
    >
      {props.children}
    </CustomThemeContext.Provider>
  )
}

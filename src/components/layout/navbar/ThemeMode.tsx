import { useCustomTheme } from '~/contexts'
import { THEME_DARK, THEME_LIGHT } from '~/utils/constants'
import { BsMoon, BsSun } from 'react-icons/all'

const ThemeMode = () => {
  //0. Init
  const {
    customTheme: { mode },
    updateThemeMode,
  } = useCustomTheme()

  //1.
  const toggleThemeModeChange = () => {
    updateThemeMode(mode === THEME_LIGHT ? THEME_DARK : THEME_LIGHT)
  }

  return (
    <button className="group rounded-full p-3.5 outline-none hover:bg-purple-100" onClick={toggleThemeModeChange}>
      {mode === THEME_LIGHT ? (
        <BsMoon className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
      ) : (
        <BsSun className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
      )}
    </button>
  )
}

export default ThemeMode

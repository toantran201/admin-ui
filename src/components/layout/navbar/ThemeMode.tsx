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
    <button className="p-3.5 group hover:bg-purple-100 rounded-full outline-none" onClick={toggleThemeModeChange}>
      {mode === THEME_LIGHT ? (
        <BsMoon className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
      ) : (
        <BsSun className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
      )}
    </button>
  )
}

export default ThemeMode

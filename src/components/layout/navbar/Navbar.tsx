import { AiOutlineMenuFold, BsArrowRight } from 'react-icons/all'
//
import { LanguagePopover, NotificationPopover, ProfilePopover, ScreenSizePopover, ThemeMode } from '~/components'
import { useCustomSidebar } from '~/contexts'

const Navbar = () => {
  const {
    customSidebar: { expand },
    toggleSidebar,
  } = useCustomSidebar()

  return (
    <nav className="w-full px-4 py-2 bg-secondary">
      <div className="flex items-center justify-between">
        <button onClick={toggleSidebar}>
          {expand ? (
            <AiOutlineMenuFold className="h-6 w-6 text-gray-600 hover:text-purple-600" />
          ) : (
            <BsArrowRight className="h-6 w-6 text-gray-600 hover:text-purple-600" strokeWidth={0.15} />
          )}
        </button>
        <div className="flex space-x-2">
          <LanguagePopover />
          <ScreenSizePopover />
          <ThemeMode />
          <NotificationPopover />
          <ProfilePopover />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

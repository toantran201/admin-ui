import { BsArrowRight } from 'react-icons/all'
//
import { LanguagePopover, NotificationPopover, ProfilePopover, ScreenSizePopover, ThemeMode } from '~/components'

const Navbar = () => {
  return (
    <nav className="w-full px-3 py-5 bg-secondary">
      <div className="flex items-center justify-between">
        <div>
          <BsArrowRight className="h-6 w-6 text-gray-600 cursor-pointer" strokeWidth={0.25} />
        </div>
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

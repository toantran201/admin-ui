import { BsArrowRight } from 'react-icons/all'
//
import { LanguagePopover, NotificationPopover, ProfilePopover, ScreenSizePopover } from '~/components'

const Navbar = () => {
  return (
    <nav className="w-full px-3 py-5 bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <BsArrowRight className="h-6 w-6 text-gray-600 cursor-pointer" strokeWidth={0.25} />
        </div>
        <div className="flex space-x-2">
          <LanguagePopover />
          <ScreenSizePopover />
          <NotificationPopover />
          <ProfilePopover />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

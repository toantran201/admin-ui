import routerGroups from '~/router/router'
import { useCustomSidebar } from '~/contexts'
//
import SidebarGroup from './SidebarGroup'
//images
import logoLg from '~/assets/images/logo/logo-light.png'
import logoSm from '~/assets/images/logo/logo-sm.png'

const Sidebar = () => {
  const {
    customSidebar: { expand },
  } = useCustomSidebar()

  return (
    <div className="sidebar transition-all fixed z-[9999] top-16 left-0 h-full bg-blue-gray-900 overflow-auto">
      {/* ---------------- Logo ----------------*/}
      <div className="sidebar__logo transition-all fixed top-0 py-4 cursor-pointer h-16 bg-blue-gray-900">
        <img src={expand ? logoLg : logoSm} alt="Logo velzon" className={`${expand ? 'h-4' : 'h-8'} mx-auto`} />
      </div>

      <div>
        {routerGroups.map((rg) => (
          <SidebarGroup key={rg.id} navGroup={rg} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar

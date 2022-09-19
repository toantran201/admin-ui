import { useRef } from 'react'
import { Link } from 'react-router-dom'
//
import privateRouterGroups from '~/router/router'
import { useCustomSidebar } from '~/contexts'
//
import SidebarGroup from './SidebarGroup'
//images
import logoLg from '~/assets/images/logo/logo-light.png'
import logoSm from '~/assets/images/logo/logo-sm.png'
import { useOutSideClick } from '~/hooks'
import { COMMON_MOBILE_BREAKPOINT } from '~/utils/constants'

const Sidebar = () => {
  //0. Init
  const {
    toggleSidebar,
    customSidebar: { expand },
  } = useCustomSidebar()
  const sidebarBlockRef = useRef<HTMLDivElement>(null)

  useOutSideClick(
    sidebarBlockRef,
    () => {
      if (window.innerWidth > COMMON_MOBILE_BREAKPOINT) return
      toggleSidebar()
    },
    expand
  )

  return (
    <div
      ref={sidebarBlockRef}
      className={`
        sidebar transition-all fixed z-[9999] top-16 left-0 h-full bg-blue-gray-900
        ${expand ? 'overflow-y-scroll' : ''}
      `}
    >
      {/* ---------------- Logo ----------------*/}
      <Link to="/admin" className="sidebar__logo transition-all fixed top-0 py-4 cursor-pointer h-16 bg-blue-gray-900">
        <img src={expand ? logoLg : logoSm} alt="Logo ...." className={`${expand ? 'h-4' : 'h-8'} mx-auto`} />
      </Link>

      <div className="pb-8">
        {privateRouterGroups.map((rg) => (
          <SidebarGroup key={rg.id} navGroup={rg} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar

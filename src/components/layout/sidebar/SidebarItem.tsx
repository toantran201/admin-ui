import { ElementType, memo, useEffect, useState } from 'react'
import { BsDash, BsDot, FiChevronDown } from 'react-icons/all'
import { useLocation, useNavigate } from 'react-router-dom'
//
import { RouterItem } from '~/router/router'
import { useCustomSidebar } from '~/contexts'
import { COMMON_MOBILE_BREAKPOINT } from '~/utils/constants'

type SidebarItemProps = {
  navItem: Partial<RouterItem>
  level: number
}

const SidebarItem = ({ navItem, level }: SidebarItemProps) => {
  //0. Init
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const pathConfig = pathname.slice('/admin/'.length)
  const {
    toggleSidebar,
    customSidebar: { expand },
  } = useCustomSidebar()
  const [open, setOpen] = useState(false)

  const pathActive = (expand && open) || (navItem.path ? pathConfig.includes(navItem.path) : false)

  useEffect(() => {
    setOpen(!expand)
  }, [expand])

  //1. Toggle open
  const toggleAccordion = () => {
    if (!expand || !navItem.children || navItem.children.length === 0) return
    setOpen((prev) => !prev)
  }

  const onNavigate = () => {
    if (window.innerWidth <= COMMON_MOBILE_BREAKPOINT) {
      toggleSidebar()
    }
    navigate(`/admin/${navItem.path as string}`)
  }

  //2. Render icon
  const renderIcon = () => {
    if (!expand && level !== 0) return null
    const iconClassNames = `
      w-5 h-5
      ${level === 0 ? 'text-gray-500' : 'text-gray-600'}
      ${pathActive ? 'text-gray-100' : ''}
      group-hover:text-gray-100
    `
    if (navItem.icon) {
      const Icon = navItem.icon as ElementType
      return <Icon className={iconClassNames} />
    }

    switch (level) {
      case 0:
        return null
      case 1:
        return <BsDash className={iconClassNames} />
      case 2:
        return <BsDot className={iconClassNames} />
    }
  }

  return (
    <div className={`sidebar__item ${level === 0 ? 'level-0' : ''} relative`}>
      <button
        className={`
          sidebar__item--button
          ${level === 0 ? 'level-0' : 'level-higher'}
          ${navItem.children ? 'has-child' : ''}
          group flex w-full items-center px-5
        `}
        onClick={navItem.children ? toggleAccordion : onNavigate}
      >
        <div
          className="flex items-center space-x-2"
          style={{
            paddingLeft: `${expand ? level * 25 : 0}px`,
          }}
        >
          {renderIcon()}
          <span
            className={`
              ${level === 0 ? 'sidebar__item--name' : ''}
              ${level === 0 ? 'text-gray-500' : 'text-gray-600'}
              ${pathActive ? 'text-gray-100' : ''}
              text-sm font-normal group-hover:text-gray-100
           `}
          >
            {navItem.name}
          </span>
        </div>

        {navItem.children && (
          <FiChevronDown
            className={`
              sidebar__item--chevron h-5 w-5
              ${level === 0 ? 'hide-chevron text-gray-500' : 'text-gray-600'}
              ${open ? 'rotate-180' : ''}
              ${pathActive ? 'text-gray-100' : ''}
              duration-400 transition-all group-hover:text-gray-100
            `}
          />
        )}
      </button>

      {navItem.children && (
        <div className={`${open ? 'sidebar__expand h-auto' : 'h-0'}`}>
          <ul className={`${open ? 'block' : 'hidden'}`}>
            {navItem.children.map((c) => (
              <SidebarItem key={c.id} navItem={c} level={level + 1} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(SidebarItem)

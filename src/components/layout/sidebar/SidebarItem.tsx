import { ElementType, memo, useEffect, useState } from 'react'
import { BsDash, BsDot, FiChevronDown } from 'react-icons/all'
//
import { RouterItem } from '~/router/router'
import { useCustomSidebar } from '~/contexts'
import { useNavigate } from 'react-router-dom'

type SidebarItemProps = {
  navItem: Partial<RouterItem>
  level: number
}

const SidebarItem = ({ navItem, level }: SidebarItemProps) => {
  //0. Init
  const navigate = useNavigate()
  const {
    customSidebar: { expand },
  } = useCustomSidebar()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(!expand)
  }, [expand])

  //1. Toggle open
  const toggleAccordion = () => {
    if (!expand) return
    setOpen((prev) => !prev)
  }

  const onNavigate = () => {
    navigate(`/admin/${navItem.path as string}`)
  }

  //2. Render icon
  const renderIcon = () => {
    if (!expand && level !== 0) return null
    if (navItem.icon) {
      const Icon = navItem.icon as ElementType
      return <Icon className="w-5 h-5 text-gray-100" />
    }

    switch (level) {
      case 0:
        return null
      case 1:
        return <BsDash className="w-5 h-5 text-gray-400 group-hover:text-gray-100" />
      case 2:
        return <BsDot className="w-5 h-5 text-gray-400 group-hover:text-gray-100" />
    }
  }

  return (
    <div className={`sidebar__item ${level === 0 ? 'level-0' : ''} relative`}>
      <button
        className={`
          sidebar__item--button
          ${level === 0 ? 'level-0' : 'level-higher'}
          ${navItem.children ? 'has-child' : ''}
          flex items-center px-5 w-full group
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
            className={`${level === 0 ? 'sidebar__item--name' : ''} ${
              level === 0 ? 'text-gray-100' : 'text-gray-500'
            } font-normal text-sm group-hover:text-gray-100`}
          >
            {navItem.name}
          </span>
        </div>

        {navItem.children && (
          <FiChevronDown
            className={`sidebar__item--chevron w-5 h-5
            ${level === 0 ? 'text-gray-100 hide-chevron' : 'text-gray-400'}
            transition-all duration-300 ${open ? 'rotate-180' : ''} group-hover:text-gray-100`}
          />
        )}
      </button>

      {navItem.children && (
        <div className={`${open ? 'h-auto sidebar__expand' : 'h-0'}`}>
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

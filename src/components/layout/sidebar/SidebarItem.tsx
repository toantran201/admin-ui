import { ElementType, memo, useState } from 'react'
import { BsDash, BsDot, FiChevronDown } from 'react-icons/all'
//
import { RouterItem } from '~/router/router'

type SidebarItemProps = {
  navItem: Partial<RouterItem>
  level: number
}

const SidebarItem = ({ navItem, level }: SidebarItemProps) => {
  //0. Init
  const [open, setOpen] = useState(false)

  //1. Toggle open
  const toggleAccordion = () => {
    setOpen((prev) => !prev)
  }

  //2. Render icon
  const renderIcon = () => {
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
    <div className="mt-3 sidebar__item">
      <button className="sidebar__item--button flex items-center px-5 py-2 w-full group" onClick={toggleAccordion}>
        <div
          className="flex items-center space-x-2"
          style={{
            paddingLeft: `${level * 25}px`,
          }}
        >
          {renderIcon()}
          <span
            className={`sidebar__item--name ${
              level === 0 ? 'text-gray-100' : 'text-gray-500'
            } font-normal text-sm group-hover:text-gray-100`}
          >
            {navItem.name}
          </span>
        </div>

        {navItem.children && (
          <FiChevronDown
            className={`sidebar__item--chevron w-5 h-5
            ${level === 0 ? 'text-gray-100' : 'text-gray-400'}
            transition-all duration-300 ${open ? 'rotate-180' : ''} group-hover:text-gray-100`}
          />
        )}
      </button>

      {navItem.children && (
        <div className={`${open ? 'h-auto' : 'h-0'}`}>
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

import { RouterGroup } from '~/router/router'
import NavItem from '~/components/layout/sidebar/SidebarItem'

type SidebarGroupProps = {
  navGroup: RouterGroup
}

const SidebarGroup = ({ navGroup }: SidebarGroupProps) => {
  return (
    <div>
      <p className="sidebar__group--title px-5 py-2 uppercase text-gray-400 text-xs font-bold">{navGroup.groupName}</p>
      <div className="mt-3">
        {navGroup.routers.map((r) => (
          <NavItem key={r.id} navItem={r} level={0} />
        ))}
      </div>
    </div>
  )
}

export default SidebarGroup

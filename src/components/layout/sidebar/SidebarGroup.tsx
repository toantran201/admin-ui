import { RouterGroup } from '~/router/router'
import SidebarItem from '~/components/layout/sidebar/SidebarItem'

type SidebarGroupProps = {
  navGroup: RouterGroup
}

const SidebarGroup = ({ navGroup }: SidebarGroupProps) => {
  return (
    <div className="mt-5">
      <p className="sidebar__group--title text-over px-5 py-2 text-xs font-bold uppercase text-gray-400">
        {navGroup.groupName}
      </p>
      <>
        {navGroup.routers.map((r) => (
          <SidebarItem key={r.id} navItem={r} level={0} />
        ))}
      </>
    </div>
  )
}

export default SidebarGroup

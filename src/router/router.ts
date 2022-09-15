import { AiOutlineAppstoreAdd, GoDashboard } from 'react-icons/all'
import { IconType } from 'react-icons'

export type RouterItem = {
  id: string
  path: string
  name: string
  icon?: IconType
  children: Partial<RouterItem>[]
}

export type RouterGroup = {
  id: string
  groupName: string
  routers: RouterItem[]
}

const routerGroups: RouterGroup[] = [
  {
    id: '1',
    groupName: 'Menu',
    routers: [
      {
        id: '1',
        path: '/dashboard',
        name: 'Dashboard',
        icon: GoDashboard,
        children: [
          {
            id: '11',
            path: '/dashboard/analytics',
            name: 'Analytics',
          },
          {
            id: '12',
            path: '/dashboard/crm',
            name: 'CRM',
          },
          {
            id: '13',
            path: '/dashboard/ecommerce',
            name: 'Ecommerce',
          },
          {
            id: '14',
            path: '/dashboard/crypto',
            name: 'Crypto',
          },
        ],
      },
      {
        id: '2',
        path: '/apps',
        name: 'Apps',
        icon: AiOutlineAppstoreAdd,
        children: [
          {
            id: '21',
            path: '/apps/calendar',
            name: 'Calendar',
          },
          {
            id: '22',
            path: '/apps/chat',
            name: 'Chat',
          },
          {
            id: '23',
            name: 'Email',
            children: [
              {
                id: '231',
                path: '/apps/email/mailbox',
                name: 'Mailbox',
              },
            ],
          },
        ],
      },
    ],
  },
]

export default routerGroups

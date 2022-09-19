import { IconType } from 'react-icons'
import { AiOutlineAppstoreAdd, GoDashboard, MdOutlineWidgets } from 'react-icons/all'
//
import { Analytics } from '~/pages/privated'

export type RouterItem = {
  id: string
  path?: string
  name: string
  icon?: IconType
  children?: Partial<RouterItem>[]
  element?: any
}

export type RouterGroup = {
  id: string
  groupName: string
  routers: Partial<RouterItem>[]
}

const privateRouterGroups: RouterGroup[] = [
  {
    id: '1',
    groupName: 'Menu',
    routers: [
      {
        id: '11',
        name: 'Dashboards',
        path: 'dashboards/',
        icon: GoDashboard,
        children: [
          {
            id: '111',
            path: 'dashboards/analytics',
            name: 'Analytics',
            element: Analytics,
          },
          {
            id: '112',
            path: 'dashboards/crm',
            name: 'CRM',
          },
          {
            id: '113',
            path: 'dashboards/ecommerce',
            name: 'Ecommerce',
          },
          {
            id: '114',
            path: 'dashboards/crypto',
            name: 'Crypto',
          },
        ],
      },
      {
        id: '12',
        name: 'Apps',
        path: 'apps',
        icon: AiOutlineAppstoreAdd,
        children: [
          {
            id: '121',
            path: 'apps/calendar',
            name: 'Calendar',
          },
          {
            id: '122',
            path: 'apps/chat',
            name: 'Chat',
          },
          {
            id: '123',
            name: 'Email',
            path: 'apps/email',
            children: [
              {
                id: '1231',
                path: 'apps/email/mailbox',
                name: 'Mailbox',
              },
            ],
          },
          {
            id: '124',
            path: 'apps/ecommerce',
            name: 'Ecommerce',
          },
        ],
      },
      {
        id: '13',
        name: 'Widgets',
        icon: MdOutlineWidgets,
        path: 'widgets',
      },
    ],
  },
  {
    id: '2',
    groupName: 'Pages',
    routers: [
      {
        id: '21',
        name: 'Authentication',
        icon: GoDashboard,
        path: 'authentication',
        children: [
          {
            id: '211',
            path: 'authentication/signin',
            name: 'Sign In',
            children: [
              {
                id: '2111',
                path: 'authentication/signin/basic',
                name: 'Basic',
              },
              {
                id: '2112',
                path: 'authentication/signin/cover',
                name: 'Cover',
              },
            ],
          },
          {
            id: '212',
            path: 'authentication/signup',
            name: 'Sign Up',
          },
          {
            id: '213',
            path: 'authentication/reset-pass',
            name: 'Password reset',
          },
        ],
      },
    ],
  },
]

export const getPrivateRoutes = () => {
  return privateRouterGroups
    .map((group) => group.routers)
    .reduce((previousValue, currentValue) => {
      return [...currentValue, ...previousValue]
    }, [])
}

export default privateRouterGroups

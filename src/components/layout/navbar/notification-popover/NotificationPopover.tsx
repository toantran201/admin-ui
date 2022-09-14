import {
  Popover,
  PopoverContent,
  PopoverHandler,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react'
import { IoNotifications } from 'react-icons/all'
import NotificationItem from './NotificationItem'

const NotificationPopover = () => {
  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <button className="p-3 group hover:bg-purple-100 rounded-full outline-none">
          <div className="relative">
            <IoNotifications className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
            <span className="absolute block w-[20px] h-[20px] -top-1/2 -right-1/2 text-[9px] p-1 bg-purple-600 rounded-full text-white font-bold">
              42
            </span>
          </div>
        </button>
      </PopoverHandler>
      <PopoverContent className="w-full md:w-auto rounded-none">
        <>
          <div className="flex items-center justify-between">
            <p className="text-gray-700 font-bold">Notifications</p>
            <p className="px-1.5 py-1 bg-purple-600 rounded-lg text-white text-xs">42 News</p>
          </div>
          <div className="w-full md:w-[300px] mt-3">
            <Tabs id={'notification-tabs'} value={0}>
              <TabsHeader>
                <Tab value={0}>
                  <span className="text-xs">All (42)</span>
                </Tab>
                <Tab value={1}>
                  <span className="text-xs">Messages (0)</span>
                </Tab>
              </TabsHeader>

              <TabsBody className="mt-2">
                <TabPanel value={0} className="p-0">
                  <NotificationItem />
                </TabPanel>
                <TabPanel value={1} className="p-0">
                  <NotificationItem />
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </>
      </PopoverContent>
    </Popover>
  )
}

export default NotificationPopover

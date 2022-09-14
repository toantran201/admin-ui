import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/all'
import { useAuth } from '~/auth/useAuth'

const ProfilePopover = () => {
  const { user } = useAuth()
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <button className="outline-none lg:flex items-center space-x-2">
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoiMwUVGepE9k3J0KYMBwG5e7w3vxaW1EgGpRDKvTFZB-k88PQ2cr9-UsgSU9tJWZok4&usqp=CAU'
            }
            className="rounded-full w-9 h-9"
            alt="avatar"
          />
          <div className="hidden lg:block text-left ">
            <p className="text-sm text-gray-900">{user?.username}</p>
            <p className="text-xs text-gray-500">Developer</p>
          </div>
        </button>
      </MenuHandler>
      <MenuList className="w-full rounded-none md:w-auto">
        <span className="text-xs lg:hidden">
          Welcome <b>{user?.username}!</b>
        </span>

        <MenuItem className="mt-2 hover:bg-blue-100">
          <div className="flex items-center space-x-2">
            <AiOutlineUser className="h-6 w-6" strokeWidth={1} />
            <span>Profile</span>
          </div>
        </MenuItem>

        <MenuItem className="hover:bg-blue-100">
          <div className="flex items-center space-x-2">
            <AiOutlineLogout className="h-6 w-6" strokeWidth={1} />
            <span>Sign Out</span>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfilePopover

import { memo } from 'react'
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/all'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
// import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
//
import { useAuth } from '~/auth/useAuth'

const ProfilePopover = () => {
  //0. Init
  const { user } = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <h1>Hello</h1>
    // <Menu placement="bottom-end">
    //   <MenuHandler>
    //     <button className="outline-none lg:flex items-center space-x-2">
    //       <img
    //         src={
    //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoiMwUVGepE9k3J0KYMBwG5e7w3vxaW1EgGpRDKvTFZB-k88PQ2cr9-UsgSU9tJWZok4&usqp=CAU'
    //         }
    //         className="rounded-full w-9 h-9"
    //         alt="avatar"
    //       />
    //       <div className="hidden lg:block text-left ">
    //         <p className="text-sm text-title-1">{user?.username}</p>
    //         <p className="text-xs text-gray-500">Developer</p>
    //       </div>
    //     </button>
    //   </MenuHandler>
    //   <MenuList className="w-full rounded-none md:w-auto bg-nav-header border-none shadow-none">
    //     <span className="text-xs lg:hidden">
    //       {t('welcome')} <b>{user?.username}!</b>
    //     </span>
    //
    //     <MenuItem className="mt-2 hover:bg-purple-100" onClick={() => navigate('/admin/profile')}>
    //       <div className="flex items-center space-x-2">
    //         <AiOutlineUser className="h-6 w-6" strokeWidth={1} />
    //         <span>{t('profile')}</span>
    //       </div>
    //     </MenuItem>
    //
    //     <MenuItem className="hover:bg-purple-100">
    //       <div className="flex items-center space-x-2">
    //         <AiOutlineLogout className="h-6 w-6" strokeWidth={1} />
    //         <span>{t('signout')}</span>
    //       </div>
    //     </MenuItem>
    //   </MenuList>
    // </Menu>
  )
}

export default memo(ProfilePopover)

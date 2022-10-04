// import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import us from '~/assets/images/nations/us.svg'
import vi from '~/assets/images/nations/vi.svg'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Language = {
  id: number
  icon: string
  label: string
  value: string
}

const LANGUAGES: Language[] = [
  { id: 1, icon: us, label: 'English', value: 'en' },
  { id: 2, icon: vi, label: 'Vietnamese', value: 'vi' },
]

const LanguagePopover = () => {
  //0. Init
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0])

  //1. On menu change
  const onMenuChange = async (item: Language) => {
    await i18n.changeLanguage(item.value)
    setSelectedLanguage(item)
  }

  return (
    <h1>Language</h1>
    // <Menu placement="bottom-end">
    //   <MenuHandler>
    //     <button className="p-3.5 hover:bg-purple-100 rounded-full outline-none">
    //       <img src={selectedLanguage.icon} className="rounded-md w-5 h-5" alt="avatar" />
    //     </button>
    //   </MenuHandler>
    //   <MenuList className="w-full rounded-none md:w-auto bg-nav-header border-none shadow-none">
    //     {LANGUAGES.map((item) => (
    //       <MenuItem key={item.id} className="hover:bg-purple-100" onClick={() => onMenuChange(item)}>
    //         <div className="flex items-center space-x-2">
    //           <img src={item.icon} alt={item.label} width={25} height={25} />
    //           <span>{item.label}</span>
    //         </div>
    //       </MenuItem>
    //     ))}
    //   </MenuList>
    // </Menu>
  )
}
export default LanguagePopover

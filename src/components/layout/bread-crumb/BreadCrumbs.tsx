import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { cloneDeep } from 'lodash'
import { MdKeyboardArrowRight } from 'react-icons/all'
//
import { getPrivateRoutes, RouterItem } from '~/router/router'

const BreadCrumbs = () => {
  //0. Init
  const location = useLocation()
  const privateRoutes = useMemo(() => {
    return getPrivateRoutes()
  }, [])

  const [selectedRoutes, setSelectedRoutes] = useState<Partial<RouterItem>[]>([])

  const isPathExistInRoutesConfig = (route: Partial<RouterItem>, configPath: string, arr: Partial<RouterItem>[]) => {
    if (route.children) {
      for (let i = 0; i < route.children.length; i++) {
        if (isPathExistInRoutesConfig(route.children[i], configPath, arr)) {
          arr.push(route)
          return true
        }
      }
    }
    if (route.path === configPath) {
      arr.push(route)
      return true
    }
  }

  //
  const getSelectedRoutes = (currentPath: string) => {
    let sRoutes: Partial<RouterItem> | null = null
    const configPath = currentPath.slice('/admin/'.length)
    let arr: Partial<RouterItem>[] = []
    for (let i = 0; i < privateRoutes.length; i++) {
      sRoutes = privateRoutes[i]
      arr = []
      if (isPathExistInRoutesConfig(sRoutes, configPath, arr)) {
        arr.reverse()
        setSelectedRoutes(cloneDeep(arr))
        break
      }
    }
  }

  //.
  useEffect(() => {
    if (!location.pathname) return
    getSelectedRoutes(location.pathname)
  }, [location.pathname])

  if (selectedRoutes && selectedRoutes.length > 0) {
    return (
      <div className="bg-nav-header px-5 py-3">
        <div className="flex w-full justify-between">
          <p className="text-lg font-bold uppercase text-heading">{selectedRoutes[selectedRoutes.length - 1].name}</p>
          <div className="flex items-center space-x-1">
            {selectedRoutes.map((item, index) => (
              <div key={item.id} className="flex items-center space-x-1 text-heading">
                <span className="text-sm">{item.name}</span>
                {index !== selectedRoutes.length - 1 ? <MdKeyboardArrowRight className="h-5 w-5" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default BreadCrumbs

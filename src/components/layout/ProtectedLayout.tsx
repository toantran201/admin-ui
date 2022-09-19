import { Navigate, Outlet } from 'react-router-dom'
//
import { useAuth } from '~/auth/useAuth'
import { Navbar, Sidebar } from '~/components'
import { CustomSidebarProvider } from '~/contexts'
//
import BreadCrumbs from './bread-crumb/BreadCrumbs'

const ProtectedLayout = () => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/" />
  }

  return (
    <CustomSidebarProvider>
      <div>
        <aside>
          <Sidebar />
        </aside>
        <main className="main-content transition-all">
          <Navbar />
          <BreadCrumbs />
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </CustomSidebarProvider>
  )
}

export default ProtectedLayout

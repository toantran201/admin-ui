import { Navigate, Outlet } from 'react-router-dom'
//
import { useAuth } from '~/auth/useAuth'
import { Navbar, Sidebar } from '~/components'
import { CustomSidebarProvider } from '~/contexts'

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
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </CustomSidebarProvider>
  )
}

export default ProtectedLayout

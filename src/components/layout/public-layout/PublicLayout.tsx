import { Navigate, Outlet, useLocation } from 'react-router-dom'
//
import { useAuth } from '~/auth/useAuth'

const PublicLayout = () => {
  const { user } = useAuth()
  const { pathname } = useLocation()

  if (user) {
    return <Navigate to="/admin" />
  }
  if (pathname === '/') return <Navigate to="signin" />

  return (
    <>
      <Outlet />
    </>
  )
}

export default PublicLayout

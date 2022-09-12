import { Navigate, Outlet } from 'react-router-dom'
//
import { useAuth } from '~/auth/useAuth'

const ProtectedLayout = () => {
  const { user } = useAuth()
  console.log(user)

  if (!user) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <nav>Navbar here</nav>
      <Outlet />
    </div>
  )
}

export default ProtectedLayout

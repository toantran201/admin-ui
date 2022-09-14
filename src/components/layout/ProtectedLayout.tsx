import { Navigate, Outlet } from 'react-router-dom'
//
import { useAuth } from '~/auth/useAuth'
import { Navbar } from '~/components'

const ProtectedLayout = () => {
  const { user } = useAuth()
  console.log(user)

  if (!user) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default ProtectedLayout

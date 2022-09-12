import { createContext, ReactNode, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
//
import { useLocalStorage } from '~/hooks/useLocalStorage'

const AuthContext = createContext<{ user: any; signin: (username: string, password: string) => void; signout: () => void } | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage({
    key: 'user',
    defaultValue: null,
  })
  const navigate = useNavigate()

  const signin = (username: string, password: string) => {
    //
    navigate('/profile')
  }

  const signout = () => {
    //
    navigate('/', { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      signin,
      signout,
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const authContext = useContext(AuthContext)
  if (!authContext) {
    throw new Error('Please use useAuth inside the AuthProvider')
  }

  return authContext
}

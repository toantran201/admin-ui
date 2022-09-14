import { createContext, ReactNode, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
//
import { useLocalStorage } from '~/hooks/useLocalStorage'
import { User } from '~/types'

const AuthContext = createContext<
  | {
      user: User | null
      signin: (username: string, password: string) => void
      signout: () => void
    }
  | undefined
>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { storedValue: user, setStorageValue: setUser } = useLocalStorage<User | null>({
    key: 'user',
    defaultValue: null,
  })
  const navigate = useNavigate()

  const signin = (username: string, password: string) => {
    //
    setUser({ username: username, email: 'toantran201.w@gmail.com' })
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

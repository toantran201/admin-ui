import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
//
import { ProtectedLayout, PublicLayout } from '~/components'
import { AuthProvider } from '~/auth/useAuth'
import { Profile } from '~/pages/privated'
import { ForgotPassword, SignIn, SignUp } from '~/pages/public'
import { Theme } from '~/types'
import { THEME_LIGHT } from '~/utils/constants'
import { CustomThemeProvider } from '~/contexts/custom-theme/CustomThemeProvider'

const getInitCustomTheme = (): Theme => {
  if (typeof window !== undefined && window.localStorage) {
    const color = window.localStorage.getItem('color')
    const mode = window.localStorage.getItem('mode')
    return {
      color: color || '',
      mode: mode || THEME_LIGHT,
    }
  }

  return {
    color: '',
    mode: THEME_LIGHT,
  }
}

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomThemeProvider initTheme={getInitCustomTheme()}>
          <AuthProvider>
            <Routes>
              {/*Public pages*/}
              <Route path="/" element={<PublicLayout />}>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Route>

              {/*Private pages*/}
              <Route path="/admin" element={<ProtectedLayout />}>
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/admin" />} />
              </Route>
            </Routes>
          </AuthProvider>
        </CustomThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App

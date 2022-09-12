import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
//
import { ProtectedLayout, PublicLayout } from '~/components'
import { AuthProvider } from '~/auth/useAuth'
import { Profile } from '~/pages/privated'
import { ForgotPassword, SignIn, SignUp } from '~/pages/public'

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  )
}

export default App

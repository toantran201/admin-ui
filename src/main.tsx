import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react'
//
import './index.css'
import App from './App'
import './translations/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  // </React.StrictMode>
)

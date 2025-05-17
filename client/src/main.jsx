import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContecxtProvider } from './context/TunelContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppContecxtProvider>
    <App />
    </AppContecxtProvider>
    </BrowserRouter>
  </StrictMode>,
)

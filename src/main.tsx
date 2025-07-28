import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap entire app with BrowserRouter */}
      <div className='bg-gray-100'>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
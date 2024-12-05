import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CarritoApp } from './CartApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoApp/>
    </StrictMode>
  </BrowserRouter>
  
)

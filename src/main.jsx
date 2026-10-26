import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
       
     
    
  </StrictMode>,
=======

createRoot(document.getElementById('root')).render(
    <App />
 
>>>>>>> 52d76c858fcd5f8e960ac9f6ab5cb6f6c91741c0
)

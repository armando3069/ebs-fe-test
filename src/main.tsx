import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from "./components/footer/footer";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className="main-content">
        <App />
      </div>    
      <Footer />
  </StrictMode>,
)

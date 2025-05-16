import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Nav from './components/Nav'
import "./main.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Nav />
  </StrictMode>,
)

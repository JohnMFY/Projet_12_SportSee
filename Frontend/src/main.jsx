import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Nav from './components/Nav'
import Dashborad from './components/Dashborad'
import "./main.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Nav/>
    <Dashborad/>
  </StrictMode>,
)

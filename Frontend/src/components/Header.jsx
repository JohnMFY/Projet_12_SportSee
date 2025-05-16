import React from 'react'
import "./Header.scss"

function Header() {
  return (
    <div className='header'>
        <img src="Frontend\src\assets\LargeLogoSportSee.svg" alt="logo" />
        <h2>Accueil</h2>
        <h2>Profil</h2>
        <h2>Réglages</h2>
        <h2>Communauté</h2>
    </div>
  )
}

export default Header
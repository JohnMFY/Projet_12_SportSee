import React from 'react'
import "./Nav.scss"

function Nav() {
  return (
    <div className='Nav'>
      <div className='icon'>
        <i className="fa-solid fa-person-praying fa-2x"></i>
        <i className="fa-solid fa-person-swimming fa-flip-horizontal fa-2x"></i>
        <i className="fa-solid fa-person-biking fa-2x"></i>
        <i className="fa-solid fa-dumbbell fa-2x"></i>
      </div>
      <p>Copyright, SportSee 2025</p>
    </div>
  )
}

export default Nav
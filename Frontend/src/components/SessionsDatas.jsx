import React from 'react'
import "./SessionsDatas.scss"

function SessionsDatas() {
  return (
    <div className='sessionsDatas'>
        <div className='activitiesTime'>
            <h2>Durée moyenne</h2>
        </div>
        <div className='intensity'>
            <h2>Intensité</h2>
        </div>
        <div className='score'>
            <h2>Score</h2>           
        </div>
    </div>
  )
}

export default SessionsDatas
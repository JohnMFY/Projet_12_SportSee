import React from 'react'
import "./SessionsDatas.scss"
import SessionsDatasActivity from './SessionsDatasActivity';
import SessionsDatasIntensity from './SessionsDatasIntensity';
import SessionsDatasScore from './SessionsDatasScore';

function SessionsDatas(props) {
  return (
    <div className='sessionsDatas'>
        <SessionsDatasActivity/>
        <SessionsDatasIntensity/>
        <SessionsDatasScore
            todayScore={props.todayScore}    
        />
    </div>
  )
}

export default SessionsDatas
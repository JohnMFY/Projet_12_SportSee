import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar } from 'recharts';
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
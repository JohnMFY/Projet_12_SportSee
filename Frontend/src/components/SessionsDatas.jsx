import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar } from 'recharts';
import "./SessionsDatas.scss"

function SessionsDatas() {

    const [activitiesTimeData, setActivitiesTimeData] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:3000/user/12/average-sessions`)
        .then((res) => {
            return res.json();
        })
        .then(activitiesTimeData => {
            setActivitiesTimeData(activitiesTimeData)
        })
    },[]);

    const [performanceData, setPerformanceData] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:3000/user/12/performance`)
        .then((res) => {
            return res.json();
        })
        .then(performanceData => {
            setPerformanceData(performanceData)
        })
    },[]);
    console.log(performanceData)

  return (
    <div className='sessionsDatas'>
        <div className='activitiesTime'>
            {activitiesTimeData &&
            <LineChart width={500} height={250} data={activitiesTimeData.data.sessions}
              margin={{ top: 5, right: 100, left: -20, bottom: 10}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sessionLength"name='Durée moyenne des sessions' stroke="#8884d8" />
            </LineChart>}
        </div>
        <div className='intensity'>
            {performanceData &&
            <RadarChart outerRadius={90} width={500} height={250} data={performanceData}>
                <PolarGrid gridType="polygon" radialLines={false}/>
                <PolarAngleAxis dataKey="performanceData.data.kind" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar dataKey="performanceData.data.data.value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>}
        </div>
        <div className='score'>
            <h2>Score</h2>           
        </div>
    </div>
  )
}

export default SessionsDatas
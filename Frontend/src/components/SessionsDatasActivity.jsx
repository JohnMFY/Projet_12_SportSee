import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SessionsDatasActivity() {
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
    /*
    const formatXAxis = tickItem => {
    return moment(tickItem).format('ddd'); 
    }
    */
  return (
    <div className='activitiesTime graph'>
        {activitiesTimeData &&
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={395} height={250} data={activitiesTimeData.data.sessions}
            margin={{ top: 5, right: 100, left: -20, bottom: 10}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sessionLength"name='Durée moyenne des sessions' stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>}
    </div>
  )
}

export default SessionsDatasActivity
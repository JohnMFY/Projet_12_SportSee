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

    const dayLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <div className='activitiesTime'>
        {activitiesTimeData &&
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width="100%" height="100%" data={activitiesTimeData.data.sessions}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
            <XAxis 
                dataKey="day" 
                tickFormatter={(day) => dayLetters[day - 1]} 
                tick={{ fill: "white", fontSize: 15, opacity:"0.5" }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
                type="monotone" 
                dataKey="sessionLength" 
                strokeWidth={5} 
                strokeOpacity={0.5}
                stroke="#FFFFFF"
            />
            </LineChart>
        </ResponsiveContainer>}
    </div>
  )
}

export default SessionsDatasActivity
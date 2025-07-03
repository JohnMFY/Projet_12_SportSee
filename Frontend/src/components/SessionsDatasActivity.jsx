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

    const CustomCursor = (props) => {
        const { points, width} = props;
        const x = points[0].x;
        return (
            <rect
                x={x}
                y={0}
                width={width}                       
                height={350}
                fill="rgba(0, 0, 0, 0.25)"
                overflow={"hidden"}
            />
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
        const time = payload.find(p => p.dataKey === 'sessionLength')?.value;
            return (
                <div style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '1px 10px',
                fontSize: '12px',
                lineHeight: '1.5',
                }}>
                <p>{time}min</p>
                </div>
            );
        };
        return null;
    };

  return (
    <div className='activitiesTime'>
        {activitiesTimeData &&
        <ResponsiveContainer width={400} height="100%">
            <h3>Durée moyenne des sessions</h3>
            <LineChart 
                width="100%" 
                height="100%" 
                data={activitiesTimeData.data.sessions}
                margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
            <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tickFormatter={(day) => dayLetters[day - 1]} 
                tick={{ fill: "white", fontSize: 15, opacity:"0.5" }}
                padding={{ left: 0, right: 0 }}
            />
            <YAxis 
                hide={true}
                axisLine={false}
                tickLine={false}
            />
            <Tooltip 
                content={<CustomTooltip />}
                cursor={<CustomCursor />}
            />
            <Line 
                type="monotone" 
                dataKey="sessionLength" 
                strokeWidth={5} 
                strokeOpacity={0.5}
                stroke="#FFFFFF"
                dot={false}             
                activeDot={{ r: 5 }}  
            />
            </LineChart>
        </ResponsiveContainer>}
    </div>
  )
}

export default SessionsDatasActivity
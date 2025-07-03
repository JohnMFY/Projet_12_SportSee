import React, { useEffect, useState } from 'react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";

function SessionsDatasIntensity() {
    const [data, setData] = useState(null)   
    useEffect(()=>{
        fetch(`http://localhost:3000/user/12/performance`)
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setData(data)
        })
    },[]);

    const kindMapping = [
        0,
        "Cardio",
        "Energy",
        "Endurance",
        "Strength",
        "Speed",
        "Intensity"
    ]
    
    const formattedData = data.data.data.map((data) => ({
        subject: kindMapping[data.kind],
        A: data.value,
    }));console.log(formattedData)
    
  return (
        <div className='intensity'>
            <ResponsiveContainer width={395} height="100%">
                <RadarChart width="100%" height="100%" outerRadius="70%" data={formattedData}>
                    <PolarGrid Type='polygon' radialLines={false} polarRadius={[0, 10, 27, 49, 72, 95]}/>
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "white", fontSize: 15 }} />
                    <Radar dataKey="A" fill="rgba(255, 1, 1, 0.70)" />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
  )
}
export default SessionsDatasIntensity
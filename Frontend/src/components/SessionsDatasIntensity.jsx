import React, { useEffect, useState } from 'react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { getPerformanceData } from '../services/api-service'
import { formattedPerformanceData } from '../services/api-data-formatter'

function SessionsDatasIntensity() {
    const [intensityData, setIntensityData] = useState(null)   
    useEffect(() => {
        const fetchData = async () => {
            const intensityData = await getPerformanceData();
            setIntensityData(intensityData);
        };fetchData();
    }, []);

  return (
        <div className='intensity'>
            <ResponsiveContainer width={400} height="100%">
                <RadarChart width="100%" height="100%" outerRadius="81%" data={formattedPerformanceData(intensityData)}>
                    <PolarGrid Type='polygon' radialLines={false} polarRadius={[0, 15, 30, 65, 105, 135]}/>
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "white", fontSize: 15 }} />
                    <Radar dataKey="A" fill="rgba(255, 1, 1, 0.70)" />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
  )
}
export default SessionsDatasIntensity
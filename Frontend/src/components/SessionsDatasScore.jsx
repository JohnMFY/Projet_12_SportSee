import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { formattedScoreData, formattedPercentageData } from '../services/api-data-formatter'

function SessionsDatasScore(props) {
    
    const percentage = formattedPercentageData(props);
    const COLORS = ["#FF0000", "transparent"];
    const data = formattedScoreData(props);

  return (
        <div className='score graph'>
            
            <ResponsiveContainer width={400} height={350}>
                <h3>Score</h3>
                <span className='scorePercentage'>
                    <h3 className='percentage'>{percentage}%</h3>
                    <p>de votre objectif</p>
                </span>
                <PieChart margin={{left: 5,top: 5,right: 5,}} label="Score">
                    <circle cx="50%" cy="50%" r={"25%"} fill="#FFFFFF" />
                    <Pie
                        data={data}
                        dataKey="value"
                        fill="#FF0000"
                        cx="50%"
                        cy="50%"
                        startAngle={90}
                        endAngle={450}
                        innerRadius="45%"
                        outerRadius="55%"
                        cornerRadius="40%"
                    >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
  )
}
export default SessionsDatasScore
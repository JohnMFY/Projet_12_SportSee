import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

function SessionsDatasScore(props) {
    
    const percentage = props.todayScore * 100;
    const COLORS = ["#FF0000", "transparent"];
    const score = props.todayScore;
    const remainsToBeDone = 1 - score;
    const data = [
        { name: "Completed", value: score },
        { name: "Remaining", value: remainsToBeDone },
    ];

  return (
        <div className='score graph'>
            <h3>Score</h3>
            <ResponsiveContainer width={395} height={250}>
                <span className='scorePercentage'>
                    <h3>{percentage}%</h3>
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
                        innerRadius="50%"
                        outerRadius="55%"
                        cornerRadius="50%"
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
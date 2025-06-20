import React from 'react'

function SessionsDatasScore(props) {
    
    const percentage = props.todayScore * 100;
    const COLORS = ['#FF0000'];

  return (
        <div className='score graph'>
            <span className='scorePercentage'>
            <h3>{percentage}%</h3>
            <p>de votre objectif</p>
            </span>  
        </div>
  )
}

export default SessionsDatasScore

/*
PIE CHART
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { UserInfo } from "../../../types/User";
import { CustomizedLegend } from "./CustomLegend";

const COLORS = ["#FF0000", "transparent"];

export default function GoalCharts({ user }: { user: UserInfo }) {
    const progression = user.score;
    const remainsToBeDone = 1 - progression;

    const dataGoal = [
        { name: "Completed", value: progression },
        { name: "Remaining", value: remainsToBeDone },
    ];
    return (
        <div className="goal">
            <div className="title">Score</div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart
                    margin={{
                        left: 5,
                        top: 5,
                        right: 5,
                        bottom: 5,
                    }}
                >
                    <circle cx="50%" cy="50%" r={"25%"} fill="#FFFFFF" />
                    <Pie
                        data={dataGoal}
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
                        {dataGoal.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                        ))}
                    </Pie>
                    <Legend verticalAlign="middle" content={<CustomizedLegend progression={progression} />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
*/
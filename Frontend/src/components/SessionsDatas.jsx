import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar } from 'recharts';
import "./SessionsDatas.scss"

function SessionsDatas(props) {

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
/*
    const formatXAxis = tickItem => {
    return moment(tickItem).format('ddd'); 
    }*/
    const percentage = props.todayScore * 100;

  return (
    <div className='sessionsDatas'>
        <div className='activitiesTime graph'>
            {activitiesTimeData &&
            <LineChart width={395} height={250} data={activitiesTimeData.data.sessions}
              margin={{ top: 5, right: 100, left: -20, bottom: 10}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sessionLength"name='Durée moyenne des sessions' stroke="#8884d8" />
            </LineChart>}
        </div>
        <div className='intensity graph'>
         {performanceData &&
            <RadarChart outerRadius={90} width={395} height={250} data={performanceData}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="data.kind" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar dataKey="data.data.value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>}
        </div>
        <div className='score graph'>
            <span className='scorePercentage'>
            <h3>{percentage}%</h3>
            <p>de votre objectif</p>
            </span>
            <PieChart width={395} height={250}> 
            <title label="Score"/>
            <Pie data={props} dataKey={props.todayScore} nameKey="todayScore" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>         
        </div>
    </div>
  )//mettre les graph dans des resp container
}

export default SessionsDatas

/*PIE CHART
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
    

RADAR CHART
import { useParams } from "react-router-dom";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { GetUserPerformance } from "../../../services/users/getUserPerformance";
import { UserInfo } from "../../../types/User";
import { RenderCustomTickPieCharts } from "./renderCustomTickPie";

export default function PieCharts({ user }: { user: UserInfo }) {
    const params = useParams<{ id: string }>();
    const { userPerformance, loading, error } = GetUserPerformance(parseInt(params.id || "0", 10));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!userPerformance) return <div>User performance not found</div>;

    const kindMapping: { [key: number]: string } = {
        1: "Cardio",
        2: "Energy",
        3: "Endurance",
        4: "Strength",
        5: "Speed",
        6: "Intensity",
    };

    const formattedData = userPerformance.data.map((item) => ({
        subject: kindMapping[item.kind],
        A: item.value,
    }));

    return (
        <ResponsiveContainer width="100%" height="100%" maxHeight={180} minWidth={180} minHeight={180}>
            <RadarChart cx="50%" cy="74%" outerRadius="100%" data={formattedData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={(props) => <RenderCustomTickPieCharts {...props} />} />
                <Radar name={user.userInfos.firstName} dataKey="A" fill="rgba(255, 1, 1, 0.70)" />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
    );
}
*/
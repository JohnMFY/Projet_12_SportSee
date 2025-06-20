import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar } from 'recharts';

function SessionsDatasIntensity() {
  return (
        <div className='intensity graph'>
            <h3>intensity graph</h3>
        </div>
  )
}
export default SessionsDatasIntensity

/*    
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
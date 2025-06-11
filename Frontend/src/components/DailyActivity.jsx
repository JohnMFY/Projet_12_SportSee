import React, { useEffect, useState } from 'react'
import "./DailyActivity.scss"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function DailyActivity() {
     const [data, setData] = useState(null)
      useEffect(()=>{
          fetch(`http://localhost:3000/user/12/activity`)
          .then((res) => {
              return res.json();
          })
          .then(data => {
              setData(data)
          })
      },[]);

  return (
    <div className='dailyActivity'>
    <h3>Activité quotidienne</h3>
     {data &&
      <BarChart barGap='10' width={1200} height={250} data={data.data.sessions}>
        <CartesianGrid strokeDasharray="4 4" vertical={false} />
        <XAxis dataKey="day" height={20}
          tickFormatter={(date) => {
            if (date) {
              const d = new Date(date);
              return d.getDate(); 
            }return '';}}
        />
        <YAxis yAxisId="left" orientation="left" hide="true" />
        <YAxis yAxisId="right" orientation="right" axisLine={false} />
        <Tooltip />
        <Legend iconType="circle" verticalAlign="top" align="right" height={50}/>
        <Bar yAxisId="right" name="Poids (kg)" barSize={10} radius={[5, 5, 0, 0]} dataKey="kilogram" fill="#282D30"/>
        <Bar yAxisId="left"  name="Calories brûlées (kCal)" barSize={10} radius={[5, 5, 0, 0]} dataKey="calories" fill="#E60000" />
      </BarChart>}
    </div>
  )
}

export default DailyActivity
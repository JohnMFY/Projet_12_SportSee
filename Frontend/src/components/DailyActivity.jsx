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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const kg = payload.find(p => p.dataKey === 'kilogram')?.value;
      const kcal = payload.find(p => p.dataKey === 'calories')?.value;

      return (
        <div style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          lineHeight: '1.5'
        }}>
          <p>{kg} kg</p>
          <p>{kcal} kCal</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='dailyActivity graph'>
    <h3>Activité quotidienne</h3>
     {data &&
        <BarChart barGap='10' width={1350} height={290} data={data.data.sessions}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} horizontal={true}/>
          <XAxis dataKey="day" height={20}
            tickFormatter={(date) => {
              if (date) {
                const d = new Date(date);
                return d.getDate(); 
              }return '';
            }}
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: 14, fontWeight: 500}} 
            tickMargin={9}
          />
          <YAxis yAxisId="left" orientation="left" hide="true" tickCount={3}/>
          <YAxis 
            yAxisId="right"   
            orientation="right"   
            axisLine={false}  
            tick={{ fill: '#9B9EAC', fontSize: 14, fontWeight: 500}} 
            ticks={[0, 50, 100]}
            tickMargin={9} 
          />
          <Tooltip 
            content={<CustomTooltip />}

          />
          <Legend iconType="circle" verticalAlign="top" align="right" height={50}/>
          <Bar yAxisId="right" name="Poids (kg)" barSize={10} radius={[5, 5, 0, 0]} dataKey="kilogram" fill="#282D30"/>
          <Bar yAxisId="left"  name="Calories brûlées (kCal)" barSize={10} radius={[5, 5, 0, 0]} dataKey="calories" fill="#E60000" />
        </BarChart>}
    </div>
  )
}

export default DailyActivity
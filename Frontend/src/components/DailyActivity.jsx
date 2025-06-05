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
      <BarChart width={1000} height={250} data={data.data.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>}
    </div>
  )
}

export default DailyActivity
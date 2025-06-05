import React, { useEffect, useState } from 'react'
import "./DailyActivity.scss"

function DailyActivity() {
     const [data, setData] = useState(null)
     
      useEffect(()=>{
          fetch(`http://localhost:3000/user/12/activity`)
          .then((res) => {
              return res.json();
          })
          .then(data => {
              setData(data)
              console.log(data);
          })
      },[]);
      console.log(data)
  return (
    <div className='dailyActivity'>
      DailyActivity
      {data &&
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>}
    </div>
  )
}

export default DailyActivity
import React, { useEffect, useState } from 'react'
import Hello from './Hello'
import DailyActivity from './DailyActivity'
import SessionsDatas from './SessionsDatas'
import Nutrition from './Nutrition'

function Dashborad() {
   const [data, setData] = useState(null)
   
    useEffect(()=>{
        fetch(`http://localhost:3000/user/12`)
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setData(data)
            console.log(data);
        })
    },[]);
    
  return (
    <div className='dashboard'>
        {data &&
        <Hello
        userName= {data.data.userInfos.firstName}//.userInfos.firstName
        />}
        <DailyActivity/>
        <SessionsDatas/>
        <Nutrition/>
    </div>
  )
}

export default Dashborad
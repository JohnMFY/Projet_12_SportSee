import React, { useEffect, useState } from 'react'
import "./Dashborad.scss"
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
        })
    },[]);
    
  return (
    
    <div className='dashboard'>
        {data &&
        <Hello
        userName= {data.data.userInfos.firstName}
        />}
        <div className='dashboardData'>
          <div className='dashboardGraph'>
            <DailyActivity/>
            {data && <SessionsDatas
              todayScore={data.data.todayScore} 
            />}
          </div>
          {data && <Nutrition
          calorieCount={data.data.keyData.calorieCount}
          proteinCount={data.data.keyData.proteinCount}
          carbohydrateCount={data.data.keyData.carbohydrateCount}
          lipidCount={data.data.keyData.lipidCount}
          />}
        </div>
    </div>
  )
}

export default Dashborad
import React from 'react'
import Hello from './Hello'
import DailyActivity from './DailyActivity'
import SessionsDatas from './SessionsDatas'
import Nutrition from './Nutrition'

let test ='userName'

function Dashborad() {
    async function userData() {
        try{
            const data = await fetch(`http://localhost:3000/user/12`)
            .then((data)=> data.json())
            console.log(data)
            return data
        } catch(err){
            console.log(err);
        }
    }userData()
    
  return (
    <div className='dashboard'>
        <Hello
        userName= {test}//.userInfos.firstName
        />
        <DailyActivity/>
        <SessionsDatas/>
        <Nutrition/>
    </div>
  )
}

export default Dashborad
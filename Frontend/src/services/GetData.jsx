import React, { useEffect, useState } from 'react'
import MockedData from '../mock/Mockdata.json'

function GetData() {
    /********************** USER DATA  **********************/
        const [userData, setUserData] = useState(null) 
        useEffect(()=>{
            fetch(`http://localhost:3000/user/12`)
            .then((res) => {
                return res.json();
            })
            .then(userData => {
                setUserData(userData)
            })
        },[]);
        console.log(userData)
    /***************************************************************/
    /*********************** USER SESSIONS  ***********************/
        const [activitiesData, setActivitiesData] = useState(null);
        useEffect(()=>{
            fetch(`http://localhost:3000/user/12/average-sessions`)
            .then((res) => {
                return res.json();
            })
            .then(activitiesData => {
                setActivitiesData(activitiesData)
            })
        },[]);
        console.log(activitiesData)
    /***************************************************************/
    /*********************   USER ACTIVITY   **********************/
    const [sessionsData, setSessionsData] = useState(null);
        useEffect(()=>{
            fetch(`http://localhost:3000/user/12/average-sessions`)
            .then((res) => {
                return res.json();
            })
            .then(sessionsData => {
                setSessionsData(sessionsData)
            })
        },[]);
        console.log(sessionsData)
    /***************************************************************/
    /********************* USER PERFORMANCE  **********************/
        const [performanceData, setPerformanceData] = useState(null)   
        useEffect(()=>{
            fetch(`http://localhost:3000/user/12/performance`)
            .then((res) => {
                return res.json();
            })
            .then(performanceData => {
                setPerformanceData(performanceData)
            })
        },[]);
        console.log(performanceData)
    /***************************************************************/
    const mock = false;
              
    return mock
    ? MockedData
    :{                       
        userData,
        activitiesData,
        sessionsData,
        performanceData,
    };
}

export default GetData
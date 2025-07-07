const isMocked = true;
const getUserData = async () => {
    if (isMocked === true) {
        return{
            data: {
                id: 13,
                userInfos: {
                    firstName: 'John',
                    lastName: 'Dubois',
                    age: 30,
                },
                todayScore: 0.52,
                keyData: {
                    calorieCount: 1800,
                    proteinCount: 130,
                    carbohydrateCount: 270,
                    lipidCount: 60,
                },
            }
        };
    } 
    const response = await fetch(`http://localhost:3000/user/12`);
    const userData = await response.json();
    return userData;
}
const getActivityData = async () => {
    if (isMocked === true) {
        return {
            "data": {
                    "userId": 13,
                    "sessions": [
                        {
                            "day": "2020-07-01",
                            "kilogram": 90,
                            "calories": 240
                        },
                        {
                            "day": "2020-07-02",
                            "kilogram": 90,
                            "calories": 220
                        },
                        {
                            "day": "2020-07-03",
                            "kilogram": 91,
                            "calories": 280
                        },
                        {
                            "day": "2020-07-04",
                            "kilogram": 91,
                            "calories": 290
                        },
                        {
                            "day": "2020-07-05",
                            "kilogram": 90,
                            "calories": 160
                        },
                        {
                            "day": "2020-07-06",
                            "kilogram": 88,
                            "calories": 162
                        },
                        {
                            "day": "2020-07-07",
                            "kilogram": 86,
                            "calories": 390
                        }
                    ]
            }
        };
    } 
    const response = await fetch(`http://localhost:3000/user/12/activity`);
    const activityData = await response.json();
    return activityData;
}
const getSessionsData = async () => {
    if (isMocked === true) {
        return {
            "data": {
                "userId": 13,
                "sessions": [
                    {
                        "day": 1,
                        "sessionLength": 30
                    },
                    {
                        "day": 2,
                        "sessionLength": 23
                    },
                    {
                        "day": 3,
                        "sessionLength": 45
                    },
                    {
                        "day": 4,
                        "sessionLength": 50
                    },
                    {
                        "day": 5,
                        "sessionLength": 0
                    },
                    {
                        "day": 6,
                        "sessionLength": 0
                    },
                    {
                        "day": 7,
                        "sessionLength": 60
                    }
                ]
            }
        };
    } 
    const response = await fetch(`http://localhost:3000/user/12/average-sessions`);
    const sessionsData = await response.json();
    return sessionsData;
}
const getPerformanceData = async () => {
    if (isMocked === true) {
        return {
            "data": {
                "userId": 13,
                "kind": {
                    "1": "cardio",
                    "2": "energy",
                    "3": "endurance",
                    "4": "strength",
                    "5": "speed",
                    "6": "intensity"
                },
                "data": [
                    {
                        "value": 80,
                        "kind": 1
                    },
                    {
                        "value": 120,
                        "kind": 2
                    },
                    {
                        "value": 140,
                        "kind": 3
                    },
                    {
                        "value": 50,
                        "kind": 4
                    },
                    {
                        "value": 200,
                        "kind": 5
                    },
                    {
                        "value": 90,
                        "kind": 6
                    }
                ]
            }
        };
    } 
    const response = await fetch(`http://localhost:3000/user/12/performance`);
    const performanceData = await response.json();
    return performanceData;
}
export{
    getUserData,
    getActivityData,
    getSessionsData,
    getPerformanceData,
}
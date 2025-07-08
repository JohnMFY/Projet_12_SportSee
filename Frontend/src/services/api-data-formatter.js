function dayAsLetter(){
    const dayLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return (day) => dayLetter[day - 1]  
};

function formattedPerformanceData(props){
    const kindMapping = [
        0,
        "Cardio",
        "Energy",
        "Endurance",
        "Strength",
        "Speed",
        "Intensity"
    ]
    if (!props) return null;
    const formattedData = props.data.data.map((data) => ({
        subject: kindMapping[data.kind],
        A: data.value,
    }));
    return formattedData
};

export{
    dayAsLetter,
    formattedPerformanceData
}
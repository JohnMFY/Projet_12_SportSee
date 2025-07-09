function dayAsLetter(){
    const dayLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return (day) => {
        if (day < 1 || day > 7) return '';
        return dayLetter[day - 1];
    };
};
function sessionLineExtension(props) {   
    const first = props[0];
    const last = props[props.length - 1];
    return [
        { ...first, day: 0},                   
        ...props,
        { ...last, day: 8 }                     
    ];
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
function formattedScoreData(props){
    const score = props.todayScore;
    const remainsToBeDone = 1 - score;
    const data = [
        { name: "Completed", value: score },
        { name: "Remaining", value: remainsToBeDone },
    ];
    return data
};
function formattedPercentageData(props){
    return props.todayScore * 100
};

export{
    dayAsLetter,
    sessionLineExtension,
    formattedPerformanceData,
    formattedScoreData,
    formattedPercentageData
}
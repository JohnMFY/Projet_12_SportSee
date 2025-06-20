import React from 'react'
import "./Nutrition.scss"
import NutritionCard from './NutritionCard'

function Nutrition(props) {
  return (
    <div className='nutrition'>
        <NutritionCard
            iconClass="fa-solid fa-fire fa-xl"
            calorieUnit="kCal"
            calorieCount={props.calorieCount}
            nutritionType="Calories"
        />
        <NutritionCard
            iconClass="fa-solid fa-drumstick-bite fa-xl"
            calorieUnit="g"
            calorieCount={props.proteinCount}
            nutritionType="Proteines"
        />
        <NutritionCard
            iconClass="fa-solid fa-apple-whole fa-xl"
            calorieUnit="g"
            calorieCount={props.carbohydrateCount}
            nutritionType="Glucides"
        />
        <NutritionCard
            iconClass="fa-solid fa-burger fa-xl"
            calorieUnit="g"
            calorieCount={props.lipidCount}
            nutritionType="Lipides"
        />
    </div>
  )
}

export default Nutrition
import React from 'react'

function NutritionCard(props) {
  return (
    <div className='dataNutrion'>
        <i className={props.iconClass}></i>
        <span>
            <h4>{props.calorieCount}{props.calorieUnit}</h4>
            <p>{props.nutritionType}</p>
        </span>
    </div>
  )
}

export default NutritionCard
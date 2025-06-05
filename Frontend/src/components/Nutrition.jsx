import React from 'react'
import "./Nutrition.scss"

function Nutrition(props) {
  return (
    <div className='nutrition'>
        <div className='calorie dataNutrion'>
            <i className="fa-solid fa-fire fa-xl"></i>
            <span>
                <h4>{props.calorieCount}kCal</h4>
                <p>Calories</p>
            </span>
        </div>
        <div className='proteine dataNutrion'>
            <i className="fa-solid fa-drumstick-bite"></i>
            <span>
                <h4>{props.proteinCount}g</h4>
                <p>Proteines</p>
            </span>
        </div>
        <div className='glucide dataNutrion'>
            <i className="fa-solid fa-apple-whole"></i>
            <span>
                <h4>{props.carbohydrateCount}g</h4>
                <p>Glucides</p>
            </span>
        </div>
        <div className='lipide dataNutrion'>
            <i className="fa-solid fa-burger"></i>
            <span>
                <h4>{props.lipidCount}g</h4>
                <p>Lipides</p>
            </span>
        </div>
    </div>
  )
}

export default Nutrition
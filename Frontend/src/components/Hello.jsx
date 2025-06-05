import React from 'react'
import "./Hello.scss"

function Hello(props) {
  return (
    <div className='greetings'>
        <span className='helloUser'>
            <h1>Bonjour</h1>
            <h1 className='name'>{props.userName}</h1>
        </span>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Hello
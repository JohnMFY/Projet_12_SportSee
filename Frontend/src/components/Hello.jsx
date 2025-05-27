import React from 'react'

function Hello(props) {
  return (
    <div className='greetings'>
        <span>
            <h1>Bonjour</h1>
            <h1 className='Name'>{props.userName}</h1>
        </span>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Hello
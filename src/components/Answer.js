import React from 'react'

export default function Answer(props) {
    return (
        <div>
            <p id={props.isCorrect} onClick={props.handleClick} style={{backgroundColor: "white"}} >{props.text}</p>
        </div>
    )
}
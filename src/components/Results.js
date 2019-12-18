import React from 'react'
import { Link } from 'react-router-dom'

export default function Results(props) {
  return (
    <div>
      <h1>Results!!!!</h1>
      <p>Your score is: {props.score} / 10</p>
      <Link to="/"><h4>Start again</h4></Link>
    </div>
  )
}

import React from 'react'

export default function Results(props) {
  return (
    <div>
      <h1>Results!!!!</h1>
      <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2013625/rs_560x415-130725124224-1024..travolta.ls.72513_copy_2.jpg?fit=inside|900:auto&output-quality=90" alt="john travolta celebrating" />
      <p>Your score is: {props.score} / 10</p>
      <a href="/"><h4>Start again</h4></a>
    </div>
  )
}

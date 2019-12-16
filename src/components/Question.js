import React from 'react'

export default function Question(props) {
  return (
    <div>
      <p>{props.question.question}</p>
      <p>{props.question.correct_answer}</p>
      <p>{props.question.incorrect_answers[0]}</p>
      <p>{props.question.incorrect_answers[1]}</p>
      <p>{props.question.incorrect_answers[2]}</p>
    </div>
  )
}

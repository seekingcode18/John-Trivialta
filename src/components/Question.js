import React from 'react'

export default function Question(props) {

  let correct = {isCorrect : true, answer : props.question.correct_answer}
  
  let incorrect = props.question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))

  // putting answers into to a new single answers array with a spread operator as objects so we can identify which is correct
  let answers = [correct, ...incorrect]

  console.log(answers)

  console.log(shuffle(answers))

  function shuffle (array) {
    return array.sort(() => Math.random() - 0.5)
  }


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

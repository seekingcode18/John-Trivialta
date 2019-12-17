import React from 'react'

export default function Question(props) {

  let correct = {isCorrect : true, answer : props.question.correct_answer}
  
  let incorrect = props.question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))

  let answers = [correct, ...incorrect]

  console.log(answers)

  function shuffle (array) {
    return array.sort(() => Math.random() - 0.5)
  }

  let array = [1 , 2 , 3, 4]


  return (
    <div>
      <p>{props.question.question}</p>
      <p>{props.question.correct_answer}</p>
      <p>{props.question.incorrect_answers[0]}</p>
      <p>{props.question.incorrect_answers[1]}</p>
      <p>{props.question.incorrect_answers[2]}</p>
      {    console.log(shuffle(array))}
    </div>
  )
}

import React from 'react'

export default function Question(props) {

  let correct = {isCorrect : true, answer : props.question.correct_answer}
  let incorrect = props.question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))
  
  function shuffle (array) {
    return array.sort(() => Math.random() - 0.5)
  }  

  // putting answers into to a new single answers array with a spread operator as objects so we can identify which is correct
  let answers = shuffle([correct, ...incorrect])

  function checkAnswer (e) {
    console.log(e.target.id)
  }

  return (
    <div>
      <p>{props.question.question}</p>

      {answers.map((answer, index) => (
        <p id={answer.isCorrect.toString()} onClick={checkAnswer} key={index}>{answer.answer}</p>
      ))}
      {/* <p>{props.question.correct_answer}</p>
      <p>{props.question.incorrect_answers[0]}</p>
      <p>{props.question.incorrect_answers[1]}</p>
      <p>{props.question.incorrect_answers[2]}</p> */}
    </div>
  )
}

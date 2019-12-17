import React from 'react'
import Answer from './Answer';

export default function Question(props) {

  let correct = {isCorrect : true, answer : props.question.correct_answer}
  let incorrect = props.question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))

  function shuffle (array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // putting answers into to a new single answers array with a spread operator as objects so we can identify which is correct
  let answers = shuffle([correct, ...incorrect]);

  // function checkAnswer (e) {
  //   if (e.target.id === "true") {
  //     e.target.style.backgroundColor = "green";
  //   }
  //   if (e.target.id === "false") {
  //     e.target.style.backgroundColor = "red";
  //   }
  // }

  return (
    <div>
      <p>{props.question.question}</p>

      {answers.map((answer, index) => (
        <Answer isCorrect={answer.isCorrect.toString()}  key={index} text={answer.answer} />
      ))}
      <button onClick={props.button}>Next</button>
      <p className="answer"></p>
    </div>
  )
}

// change this to a class and then add state of background

// in question.js have state of background as null
// when rendering <Answer /> set className to this.state.background (null)
// this happens in qustion.js
// 

// in answer.js don't set State but directly change background using onClick function by adding classes
// do this by e.target.className = green OR red

import React from 'react'
import Answer from './Answer';

export default class Question extends React.Component {
  state = {
    answers: this.shuffle([{isCorrect : true, answer : this.props.question.correct_answer}, ...this.props.question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))])
  }
  // putting answers into to a new single answers array with a spread operator as objects so we can identify which is correct

  shuffle(array) {array.sort(() => Math.random() - 0.5)}

  // function checkAnswer (e) {
  //   if (e.target.id === "true") {
  //     e.target.style.backgroundColor = "green";
  //   }
  //   if (e.target.id === "false") {
  //     e.target.style.backgroundColor = "red";
  //   }
  // }

  render() {
    return (
      <div>
        <p>{this.props.question.question}</p>

        {this.state.answers.map((answer, index) => (
          <Answer isCorrect={answer.isCorrect.toString()}  key={index} text={answer.answer} />
          ))}
        <button onClick={this.props.button}>Next</button>
        <p className="answer"></p>
      </div>
    )
  }
}

// change this to a class and then add state of background

// in question.js have state of background as null
// when rendering <Answer /> set className to this.state.background (null)
// this happens in qustion.js
//

// in answer.js don't set State but directly change background using onClick function by adding classes
// do this by e.target.className = green OR red

import React from 'react'
import Answer from './Answer';

export default class Question extends React.Component {
  state = {
    answers: null,
    background: "white" // pass this new state down to Answer to use as class on <p>
  }
  // putting answers into to a new single answers array with a spread operator as objects so we can identify which is correct

  // shuffle(array) {
  //   return array.sort(() => Math.random() - 0.5)
  // }

   updateColour(e) {
    console.log('updateColour()');
    this.setState({background: "cyan"});
    // e.target.className.add = "cyan";
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    return {
     answers: (([{isCorrect : true, answer : nextProps.question.correct_answer}, ...nextProps.question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))]).sort(() => Math.random() - 0.5))
    };
   }


  componentDidMount() {
    // console.log('correct answer from props', {isCorrect: true, answer: this.props.question.correct_answer})
    // console.log('incorrect answers from props', this.props.question.incorrect_answers.map(answer => ({isCorrect: false, answer: answer})))
    let combinedAnswers = [{isCorrect: true, answer: this.props.question.correct_answer}, ...this.props.question.incorrect_answers.map(answer => ({isCorrect: false, answer: answer}))];
    // console.log('combined answers', combinedAnswers)
    // console.log('shuffled answers', this.shuffle(combinedAnswers).sort(() => Math.random() - 0.5)
    // let objectifiedAnswers = combinedAnswers.map(answer => ({isCorrect: false, answer: answer}))
    // console.log('objectified answers', objectifiedAnswers)


    let shuffledAnswers = ([{isCorrect : true, answer : this.props.question.correct_answer}, ...this.props.question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))]).sort(() => Math.random() - 0.5)
    // console.log('shuffledAnswers', shuffledAnswers)
    this.setState({answers: shuffledAnswers})
  }

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

        {/* answers don't update on clicking Next because Q.js state doesn't change */}
        {/* see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#fetching-external-data-when-props-change */}
        {this.state.answers !== null ? this.state.answers.map((answer, index) => (
          <Answer isCorrect={answer.isCorrect.toString()} background={this.state.background} key={index} updateColour={this.updateColour.bind(this)} text={answer.answer} />
          ))
        :null }
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

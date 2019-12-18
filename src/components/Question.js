import React from 'react'
import Answer from './Answer';

export default class Question extends React.Component {
  state = {
    background: "white" // pass this new state down to Answer to use as class on <p>
  }

  // componentDidMount() {
  //   console.log(this.props.question)
  // }
  // componentDidUpdate() {
  //   console.log(this.props.question)
  // }

  render() {
    return (
      <div>
        <p>You are on Question {this.props.question.id + 1}</p>
        <p>{this.props.question.question}</p>
        {this.props.question.answers.map((answer, index) => (
            <Answer isCorrect={answer.isCorrect.toString()} background={this.state.background} key={index} hasbeenclicked={this.props.hasbeenclicked} text={answer.answer} clicker={this.props.clicker} />
            ))}

        <button onClick={this.props.button} >Next</button>
      </div>
    )
  }
}

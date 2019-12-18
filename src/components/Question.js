import React from 'react'
import Answer from './Answer';

export default class Question extends React.Component {
  state = {
    background: "white" // pass this new state down to Answer to use as class on <p>
  }

    // decodes questions
    decodeHtml(html) {
      const txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }

  render() {
    return (
      <div>
        <p>You are on Question {this.props.question.id + 1} / 10</p>
        <p>{this.decodeHtml(this.props.question.question)}</p>
        {this.props.question.answers.map((answer, index) => (
            <Answer isCorrect={answer.isCorrect.toString()} background={this.state.background} key={index} hasbeenclicked={this.props.hasbeenclicked} text={answer.answer} clicker={this.props.clicker} />
            ))}

        <button onClick={this.props.button} >Next</button>
      </div>
    )
  }
}

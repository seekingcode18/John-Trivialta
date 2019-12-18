import React from 'react'
import Answer from './Answer';

export default class Question extends React.Component {
  state = {
    background: "white" // pass this new state down to Answer to use as class on <p>
  }

  // static getDerivedStateFromProps(nextProps, prevState) { // to use
  //   return {
  //    we need has been clicked to be sent down as props to this so we can see if it has been clicked to determine if you need to change the color (refer to aaron)
  //   };
  //  }

  componentDidMount() {
    console.log(this.props.question)
  }

  // move to answer js
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
        {/* need to rewire */}
        <p>{this.props.question.question}</p>
        {this.props.question.answers.map((answer, index) => (
            <Answer isCorrect={answer.isCorrect.toString()} background={this.state.background} key={index} hasbeenclicked={this.props.hasbeenclicked} text={answer.answer} clicker={this.props.clicker} />
            ))}

        {/* {this.state.answers !== null ? this.state.answers.map((answer, index) => (
            <Answer isCorrect={answer.isCorrect.toString()} background={this.state.background} key={index} updateColour={this.updateColour.bind(this)} hasbeenclicked={this.props.hasbeenclicked} text={answer.answer} clicker={this.props.clicker} />
            ))
            :null 
        } */}

        <button onClick={this.props.button}>Next</button>
        <p className="answer"></p>
      </div>
    )
  }
}

// in question.js have state of background as null
// when rendering <Answer /> set className to this.state.background (null)
// this happens in qustion.js

// do this by e.target.className = green OR red
import React, { Component } from 'react';
import Question from '../components/Question';

export default class Questions extends Component {
  state = {
    questions: null,
    incrementor: 0,
    hasBeenClicked: false
  }

  getQuestions = () => {
    let API = `https://opentdb.com/api.php?amount=10&category=${this.props.properties.category}&difficulty=${this.props.properties.difficulty}&type=multiple`
    fetch(API)
    .then(data => data.json())
    // .then(data => console.log(data.results))
    .then(data => this.setState({
      questions: data.results
    }))
  }


  // resetColour: resets background state

  incrementor = () => {
    console.log('incrementor()')
    this.setState({incrementor: this.state.incrementor + 1})
    // this.forceUpdate()
    this.setState({hasBeenClicked : false})
// resetColour()
  }

  componentDidMount() {
    this.getQuestions()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.hasBeenClicked)
  }
  
  clicked () {
    console.log('I was clicked')
    this.setState({hasBeenClicked : true})
  }

  render() {
    return (
      <div>
        <p>I am Questions</p>
        <p>{this.props.properties.category}</p>
        <p>{this.props.properties.difficulty}</p>
        {/* {this.state.questions !== null ? this.state.questions[this.state.incrementor].question : null} */}
        {this.state.questions !== null ? <Question button={this.incrementor} question={this.state.questions[this.state.incrementor]} clicker={this.clicked}/> : null}
        {/* <button onClick={this.incrementor}>Next</button> */}
        {/* {this.state.questions !== null ? this.state.questions.map((question, index) => ( */}
          {/* <p key={index}>{question.question}</p>
        )) : null} */}
      </div>
    )
  }
}

import React, { Component } from 'react';
import Question from '../components/Question';

export default class Questions extends Component {
  state = {
    questions: null,
    incrementor: 0,
    hasBeenClicked: false,
    score: 0
  }

  getQuestions = () => {
    let API = `https://opentdb.com/api.php?amount=10&category=${this.props.properties.category}&difficulty=${this.props.properties.difficulty}&type=multiple`
    fetch(API)
    .then(data => data.json())
    .then(data => data.results)
    .then(data => {
      let shuffledData = data.map((question, index) => {
        let shuffledAnswers = ([{isCorrect : true, answer : question.correct_answer}, ...question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))]).sort(() => Math.random() - 0.5)
        return {
          question: question.question,
          answers: shuffledAnswers,
          id: index
        }
      })
      return shuffledData
    })
    .then(data => this.setState({
      questions: data
    }))
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  incrementor = () => {
    this.setState({incrementor: this.state.incrementor + 1})
    this.setState({hasBeenClicked : false})
  }

  componentDidMount() {
    this.getQuestions()
  }


  clicked () {
    this.setState({hasBeenClicked : true})
  }

  render() {
    return (
      <div>
        <p>I am Questions</p>
        <p>{this.props.properties.category}</p>
        <p>{this.props.properties.difficulty}</p>
        {this.state.questions !== null ? 
          <Question button={this.incrementor} question={this.state.questions[this.state.incrementor]} clicker={this.clicked.bind(this)} hasbeenclicked={this.state.hasBeenClicked} score={this.state.score} /> 
          : null
        }
      </div>
    )
  }
}

import React, { Component } from 'react';
import Question from '../components/Question';
import Results from '../components/Results';

export default class Questions extends Component {
  state = {
    questions: null,
    incrementor: 0,
    hasBeenClicked: false,
    score: 0,
    showResults: false
  }

  getQuestions = () => {
    let API = `https://opentdb.com/api.php?amount=10&category=${this.props.properties.category}&difficulty=${this.props.properties.difficulty}&type=multiple`
    fetch(API)
    .then(data => data.json())
    .then(data => data.results)
    .then(data => {
      let shuffledData = data.map((question, index) => {
        /* map allows you to access 1 question object at a time
        make 1 array with the correct answer and all of the incorrect answers
        shuffle those into a random order
        */
        let shuffledAnswers = ([{isCorrect : true, answer : question.correct_answer}, ...question.incorrect_answers.map(answer => ({ isCorrect : false , answer : answer }))]).sort(() => Math.random() - 0.5)
        return {
        // returns an object that contains only what we need from map
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

  incrementor = () => {

    this.setState({incrementor: this.state.incrementor + 1})
    this.setState({hasBeenClicked : false})
  }

  componentDidMount() {
    this.getQuestions()
  }

  // this is to change the state to true when you click an answer
  clicked (e) {
    this.setState({hasBeenClicked : true})
    if (e.target.id === 'true') {
      this.setState({score: this.state.score + 1})
    }
  }

  render() {
    console.log(this.state.questions)
    return (
      <div>
        {this.state.incrementor !== 10 ?
        this.state.questions !== null ? <Question button={this.incrementor} question={this.state.questions[this.state.incrementor]} clicker={this.clicked.bind(this)} hasbeenclicked={this.state.hasBeenClicked} score= {this.state.score} /> : null
        : <Results score={this.state.score} />
        }
      </div>
    )
  }
}

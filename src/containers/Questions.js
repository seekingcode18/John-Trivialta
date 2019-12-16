import React, { Component } from 'react'

export default class Questions extends Component {
  state = {
    questions: null
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
  
  componentDidMount() {
    this.getQuestions()

  }

  render() {
    return (
      <div>
        <p>I am Questions</p>
        <p>{this.props.properties.category}</p>
        <p>{this.props.properties.difficulty}</p>

        {this.state.questions !== null ? this.state.questions.map((question, index) => (
          <p key={index}>{question.question}</p>
        )) : null}
      </div>
    )
  }
}

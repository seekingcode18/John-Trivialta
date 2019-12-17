// import React from 'react'

// export default function Answer(props) {
//     return (
//         <div>
//             <p id={props.isCorrect} onClick={props.handleClick} style={{backgroundColor: "white"}} >{props.text}</p>
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class Answer extends Component {

    state = {
        background: "white"
    }
    // remove this state as state will be initialised in question.justify

    // make function for toggling classes green/red
    //   which will be wiped when question.js renders new <Answers />

    // In Questions and brought down through props 
   checkAnswer (e) {
        if (e.target.id === "true") {
        //   e.target.style.backgroundColor = "green";
        // boolean true 
        this.setState({ background: true})
        // this.setState({background: "green"})
        }
        if (e.target.id === "false") {
        //   e.target.style.backgroundColor = "red";
        this.setState({ background: false})
        // this.setState({background: "red"})
        }
      }

    refresher(e) {
        console.log(e.target)
    }
    // {this.state !== {} ? console.log('hi') : console.log('bye')}
  componentDidMount() {
    // console.log('hi')
    this.setState({background: "white"})
  }

    render() {
        return (
            <div>
                <p id={this.props.isCorrect} className={this.state.background ? "green" : "red" } onClick={this.checkAnswer} onLoad={this.refresher}>{this.props.text}</p>
            </div>
        )
    }
}

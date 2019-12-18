import React, {useState} from 'react';
import './Answer.css';
import { render } from 'enzyme';

export default class Answer extends React.Component {
    state = {
        background: this.props.background
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Answer.js getDerivedState')
        // if next has been clicked, do this return statement, else do nothing
        if (nextProps.hasbeenclicked === false) {
            return {
                background: nextProps.background
                // background: null
            };
        }
    }

// componentDidMount() {
//     console.log('Answer.js componentDidMount')
//     this.setState({background: this.props.background})
// }


    // removed this state as state will be initialised in question.justify
    // make function for toggling classes green/red
    //   which will be wiped when question.js renders new <Answers />

    // In Questions and brought down through props
//    const checkAnswer = (e) => {
//         if (e.target.id === "true") {
//         //   e.target.style.backgroundColor = "green";
//         // boolean true
//         setState({ background: true})
//         // setState({background: "green"})
//         }
//         if (e.target.id === "false") {
//         //   e.target.style.backgroundColor = "red";
//         setState({ background: false})
//         // setState({background: "red"})
//         }
//       }
    updateColour(e) {
        // e.target.classList.add("red")
        this.setState({background: "red"})
        // e.target.classList.remove("white")
        console.log(`updateColour(${this.state.background})`);
        // e.target.className.add = "cyan";
    }
    render() {
        return (
            <div>
            {/* <p id={this.props.isCorrect} className={this.state.background} onClick={this.props.clicker} onClickCapture={this.updateColour.bind(this)}
            >{this.props.text}</p> */}
        </div>
    )
}
}
//  onClickCapture={this.updateColour.bind(this)}
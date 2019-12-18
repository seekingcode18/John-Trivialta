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

   // In Questions and brought down through props
   checkAnswer (e) {
       if (!this.props.hasbeenclicked) {
           if (e.target.id === "true") {
               this.setState({background: "green"})
            }
            if (e.target.id === "false") {
                this.setState({background: "red"})
            }
        }
    }

    // updateColour(e) {
    //     // e.target.classList.add("red")
    //     this.setState({background: "red"})
    //     // e.target.classList.remove("white")
    //     console.log(`updateColour(${this.state.background})`);
    //     // e.target.className.add = "cyan";
    // }

    render() {
        return (
            <div>
            <p id={this.props.isCorrect} className={this.state.background} onClick={this.props.clicker} onClickCapture={this.checkAnswer.bind(this)}
            >{this.props.text}</p>
            {/* <p>{this.props.text}</p> */}
        </div>
    )
}
}
//  onClickCapture={this.updateColour.bind(this)}
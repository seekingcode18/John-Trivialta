import React, {useState} from 'react';
import './Answer.css';
import { render } from 'enzyme';

export default class Answer extends React.Component {
    state = {
        background: this.props.background
    }

    // resets background of answers to white when you click next using the props from the parent state
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Answer.js getDerivedState')
        if (nextProps.hasbeenclicked === false) {
            return {
                background: nextProps.background
            };
        }
        return null
    }

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

    render() {
        return (
            <div>
            <p id={this.props.isCorrect} className={this.state.background} onClick={this.props.clicker} onClickCapture={this.checkAnswer.bind(this)}
            >{this.props.text}</p>
        </div>
    )
}
}
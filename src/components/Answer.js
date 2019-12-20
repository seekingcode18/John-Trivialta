import React from 'react';
import './Answer.css';

export default class Answer extends React.Component {
    state = {
        background: this.props.background
    }

    // decodes answers
    decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
    }

    // resets background of answers to white when you click next using the props from the parent state
    static getDerivedStateFromProps(nextProps, prevState) {
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
            <div className="answer">
            <p id={this.props.isCorrect} className={this.state.background} onClick={this.props.clicker} onClickCapture={this.checkAnswer.bind(this)}
            >{this.decodeHtml(this.props.text)}</p>
        </div>
    )
}
}
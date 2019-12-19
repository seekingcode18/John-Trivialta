import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SetUp from '../components/SetUp';
import Questions from '../containers/Questions'

export default class App extends Component {
  state = {
    category: 9,
    difficulty: 'easy',
    setupComplete: false
  }

  handleCategory (e) {
    this.setState({category: e.target.value})
  }

  handleDifficulty (e) {
    this.setState({difficulty: e.target.value})
  }

  handleSubmit = (e) => {
    this.setState({setupComplete: !this.state.setupComplete})
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Link to="/"><h2>John Trivialta</h2></Link>

        <Switch>
          <Route path="/questions">
            <Questions properties={this.state} />
          </Route>

          <Route path="/">
            <SetUp handleCategory={this.handleCategory.bind(this)} handleDifficulty={this.handleDifficulty.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}


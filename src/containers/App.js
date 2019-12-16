import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SetUp from '../components/SetUp';

export default class App extends Component {
  state = {
    category: null,
    difficulty: null
  }

  handleCategory (e) {
    console.log(e.target.value)
    this.setState({category: e.target.value})
  }

  handleDifficulty (e) {
    console.log(e.target.value)
    this.setState({difficulty: e.target.value})
  }

  componentDidMount() {
    // console.log(this.state)
  }

  render() {
    return (
      <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/questions">
            <p>This is the questions page</p>
          </Route>

          <Route path="/">
            <p>this is the home page</p>
            <SetUp handleCategory={this.handleCategory.bind(this)} handleDifficulty={this.handleDifficulty.bind(this)}/>
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}


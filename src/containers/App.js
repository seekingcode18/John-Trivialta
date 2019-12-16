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
    category: 'General Knowledge',
    difficulty: 'Easy',
    setupComplete: false
  }

  handleCategory (e) {
    console.log(e.target.value)
    this.setState({category: e.target.value})
  }

  handleDifficulty (e) {
    console.log(e.target.value)
    this.setState({difficulty: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault(); //  to be deleted
    console.log('submit setupJS', this.state); // this function attaches the addSearch func from app to homepage. this console is to make sure handle change worked
    this.setState({setupComplete: !this.state.setupComplete})
  }

  componentDidMount() {
    console.log('cDM appjs', this.state)
  }

  componentDidUpdate() {
    console.log('cDU appjs', this.state)
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
            <Questions />
          </Route>

          <Route path="/">
            <p>this is the home page</p>
            <SetUp handleCategory={this.handleCategory.bind(this)} handleDifficulty={this.handleDifficulty.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}


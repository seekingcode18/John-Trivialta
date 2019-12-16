import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SetUp from '../components/SetUp';

function App() {
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
            <SetUp />
          </Route>

          <Route path="/">
            <p>this is the home page</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

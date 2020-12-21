import React, { Component } from 'react';
import DemoHooks from './components/demoHooks';
import DemoComponent from './components/demoComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/democlass">Demo Class</Link>
              </li>
              <li>
                <Link to="/demohooks">Demo Hooks</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/democlass">
              <DemoComponent />
            </Route>
            <Route path="/demohooks">
              <DemoHooks />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

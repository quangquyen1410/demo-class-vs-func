import React, { Component } from 'react';
import DemoHooks from './components/demoHooks';
import DemoComponent from './components/demoComponent';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import DemoRedux from './components/demoRedux';
import CallVideo from './components/callVideo';
import DemoVideoCustom from './components/demoVideoCustom';



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
              <li>
                <Link to="/demoredux">Demo Redux</Link>
              </li>
              <li>
                <Link to="/callvideo">Demo Call Video</Link>
              </li>
              <li>
                <Link to="/demovideocustom">Demo Video custom</Link>
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
            <Route path="/demoredux">
              <DemoRedux />
            </Route>
            <Route path="/callvideo">
              <CallVideo />
            </Route>
            <Route path="/demovideocustom">
              <DemoVideoCustom />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

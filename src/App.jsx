import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

import reactLogo from './assets/React-icon.png';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <main className="container">
          <div>
            <h1>hello world!</h1>
            <img className="container__image" alt="react logo" src={reactLogo} />
            <p>If you see this everything is working!</p>
          </div>
          <ul className="left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </HashRouter>
    );
  }
}

export default App;

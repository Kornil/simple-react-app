import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

import reactLogo from './assets/React-icon.png';

/**
 * this container is defined as class so you can modify state
 * when you add more stuff to it
 */
class App extends React.Component {
  /**
   * this is our statefull render
   * @return {objects} our stateless components
   */
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

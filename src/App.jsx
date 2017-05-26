import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

/**
 * this container is defined as class so we can modify state
 */
class App extends React.Component {
  /**
   * this is our statefull render
   * @return {objects} our stateless components
   */
  render() {
    return (
      <BrowserRouter>
        <main>
          <h1>hello world!</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

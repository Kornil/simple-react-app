import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import reducer from './reducers';
import App from './App';
import './style.scss';

const root = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root,
);

if (module.hot) module.hot.accept(App, () => render(App));

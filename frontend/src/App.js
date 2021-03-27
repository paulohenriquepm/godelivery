import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import history from './services/history.js';

const App = () => (
  <Router history={history}>
    <Routes />

    <GlobalStyle />
  </Router>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('root')
);
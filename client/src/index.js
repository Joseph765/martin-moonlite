import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './home';
import { Music } from './music';
import { Photos } from './photos';
import { Biography } from './biography';
import { Discography } from './discography';
import { NoMatch } from './noMatch';
import { GlobalStyle } from './global.styles';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/music">
        <Music />
      </Route>
      <Route path="/photos">
        <Photos />
      </Route>
      <Route path="/biography">
        <Biography />
      </Route>
      <Route path="/discography">
        <Discography />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
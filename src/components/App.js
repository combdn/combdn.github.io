import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import ScrollToTop from './scroll-to-top';
import Home from './home';
import Case from './case';

import GoogleAnalytics from './google-analytics';

export default function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/case/:caseId">
              <Case />
            </Route>
          </Switch>
        </ScrollToTop>
        <GoogleAnalytics />
      </Router>
    </div>
  );
}

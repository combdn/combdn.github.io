import React from 'react';
import { Router, globalHistory } from '@reach/router';
import './App.scss';
import ScrollToTop from './scroll-to-top';
import Home from './home';
import Case from './case';

// Send the current location to the Google Analytics
// (By default it doesn't see the location changes by the router.)
globalHistory.listen(({ location, action }) => {
  window.gtag('config', 'UA-156429844-1', { page_path: location.pathname });
});

export default function App() {
  return (
    <div>
      <Router>
        <ScrollToTop path="/">
          <Home path="/" />
          <Case path="/case/:caseId" />
        </ScrollToTop>
      </Router>
    </div>
  );
}

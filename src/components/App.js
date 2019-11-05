import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import './App.scss';
import ScrollToTop from './scroll-to-top';
import Home from './home';
import Case from './case';

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

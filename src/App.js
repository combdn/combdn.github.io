import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import './App.scss';
import ScrollToTop from './components/scroll-to-top';
import Home from './components/home';
import Case from './components/case';

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

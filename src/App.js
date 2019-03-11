import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Portfolio from './components/portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Portfolio />
      </div>
    );
  }
}

export default App;

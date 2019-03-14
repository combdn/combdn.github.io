import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;

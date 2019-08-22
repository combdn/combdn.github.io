import React, { useState } from 'react';
import './App.scss';
import Home from './components/home';
import CasePW from './components/case-pw';

// TODO: Support browser navigation

export default function App() {
  const [location, setLocation] = useState('home');
  let componentToShow;

  function navigator(destination) {
    setLocation(destination);
  }

  switch (location) {
    case 'home':
      componentToShow = <Home navigator={navigator} />;
      break;

    case 'PW':
      componentToShow = <CasePW navigator={navigator} />;
      break;

    default:
      componentToShow = <Home navigator={navigator} />;
      break;
  }

  return <div>{componentToShow}</div>;
}

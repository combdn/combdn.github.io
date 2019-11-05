import React from 'react';
import Header from './header';
import Portfolio from '../features/gallery/gallery';
import Footer from './footer';

export default function Home(props) {
  return (
    <div>
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

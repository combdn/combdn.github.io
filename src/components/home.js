import React from 'react';
import Header from './header';
import Gallery from '../features/gallery/gallery';
import Footer from './footer';

import './home.scss';

export default function Home(props) {
  return (
    <div className="page-home">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

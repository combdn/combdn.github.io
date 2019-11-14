import React from 'react';
import Header from './header';
import Gallery from '../features/gallery/gallery';
import Footer from './footer';

export default function Home(props) {
  return (
    <div>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

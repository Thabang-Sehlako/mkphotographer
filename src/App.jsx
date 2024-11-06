import React from 'react';
import NavBar from './Components/NavBar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Gallery from './Gallery/Gallery'

const App = () => (
  <div>
    <NavBar />
    <Carousel />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default App;
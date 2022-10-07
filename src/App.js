import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;

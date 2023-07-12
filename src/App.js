import React from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

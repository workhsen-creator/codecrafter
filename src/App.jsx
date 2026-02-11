import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default App;

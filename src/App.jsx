import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';

function LandingPage() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Contact />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <AnimatedBackground />
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="*" element={<LandingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

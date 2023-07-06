import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <main>
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        {/* Contact Form here? */}
        <Footer />
      </main>
    </>
  )
}

export default App;
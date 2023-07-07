import React from 'react';
import './styles/styles.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <NavBar />
        <Header />
        <main>
          <AboutMe />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
    </>
  )
}

export default App;
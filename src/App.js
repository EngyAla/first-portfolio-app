import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MainSlide from './components/MainSlide'
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NewsLetter from './components/NewsLetter';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="home">
        <MainSlide />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id='contact'>
      <Contact />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;

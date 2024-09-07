
import './App.css'
// import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Navigation from './sections/Navigation/Navigation';

function App() {

  // console.log('test');
  return (
    
    <>
    <Navigation/>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App

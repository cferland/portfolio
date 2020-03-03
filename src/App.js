import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/"><Home /></Route>
      <Route path="/projects"><Projects /></Route>
      <Route path="/resume"><Resume /></Route>
      <Route path="/contact"><Contact /></Route>
      <Footer />
    </div>
  );
}

export default App;

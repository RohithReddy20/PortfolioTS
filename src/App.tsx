import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Home />
            <Skills />
            <Contact />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

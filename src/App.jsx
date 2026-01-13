import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Proposal from './components/Proposal';
import OurFuture from './components/OurFuture';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/our-future" element={<OurFuture />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

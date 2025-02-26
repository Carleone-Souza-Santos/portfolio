import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HardSkills from '../pages/HardSkills';
import Projects from '../pages/Projects';
import Header from '../components/Header';

const Root = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hardskills" element={<HardSkills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default Root;

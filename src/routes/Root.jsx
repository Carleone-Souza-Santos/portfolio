import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SorftSkil from '../pages/Softskil';
import Projects from '../pages/Projects';
import Header from '../components/Header';

const Root = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorftskil" element={<SorftSkil />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default Root;

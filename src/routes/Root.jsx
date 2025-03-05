// Rotas
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import HardsSkills from '../pages/Habilit/HardSkills';
import Projects from '../pages/Project/Projects';
import Header from '../components/Header/Header';

export const Root = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hardskills" element={<HardsSkills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

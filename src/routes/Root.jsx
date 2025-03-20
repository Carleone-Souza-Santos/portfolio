// Rotas
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Projects } from '../pages/Project/Projects';
import { Header } from '../components/Header/Header';
import { Skills } from '../pages/Habilit/Skills';

export const Root = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

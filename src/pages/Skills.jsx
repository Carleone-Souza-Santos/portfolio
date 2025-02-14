import React from 'react';
import { Container } from '../styles/StyleSkil';
import Carousel from '../components/Carrossel';

const Skills = () => {
  return (
    <Container>
      <Carousel />
      <h1>Minhas Habilidades</h1>
      <p>React, JavaScript, Tailwind CSS, Styled Components...</p>
    </Container>
  );
};

export default Skills;

import React from 'react';
import { Box } from '../styles/StyleHome';
import Img from '../assets/Astronaut.png';
import ProjectCard from '../components/Card';
import SmallRoundedIcons from '../components/Links';
import { AstronautImage, ImageWrapper } from '../styles/EfectIArt';

const Home = () => {
  const project = {
    name: 'Hello Turma!',
    description:
      'Meu nome e Carleone Santos sou desenvolvedor criativo e apaixonado por tecnologia. Com experiência em front-end, especialmente em JavaScript, React e TypeScript,' +
      'também busco expandir meus conhecimentos no back-end para me tornar full-stack. Tenho o objetivo de criar soluções eficientes e atraentes, sempre focando ' +
      'na experiência do usuário e no design intuitivo. Se você busca alguém inovador, ' +
      'com paixão por resolver problemas e sempre disposto a aprender, estou pronto para transformar ideias em realidade! 🚀',
    owner: {
      avatar_url: Img,
    },
    html_url: 'https://github.com/Carleone-Souza-Santos',
  };

  return (
    <>
      <h3 style={{ marginLeft: '130px' }}>Desenvolvedor</h3>
      <h2 style={{ marginLeft: '230px' }}>Front End.</h2>

      <Box style={{ marginRight: 150 }}>
        <ProjectCard width="800px" project={project} />
      </Box>

      <ImageWrapper>
        <AstronautImage src={Img || null} alt="Astronaut" />
      </ImageWrapper>

      <Box style={{ marginLeft: 500 }}>
        <SmallRoundedIcons />
      </Box>
    </>
  );
};

export default Home;

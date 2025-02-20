import React, { useState, useEffect } from 'react';
import { Box } from '../styles/StyleHome';
import Img from '../assets/Astronaut.png';
import ProjectCard from '../components/Card';
import SmallRoundedIcons from '../components/Links';
import { AstronautImage, ImageWrapper } from '../styles/EfectIArt';

const Home = () => {
  const [cardWidth, setCardWidth] = useState(
    window.innerWidth < 700 ? '100%' : '800px',
  );

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth < 700 ? '100%' : '800px');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const project = {
    name: 'Hello Turma!',
    description:
      'Meu nome é Carleone Santos, sou desenvolvedor criativo e apaixonado por tecnologia. Com experiência em front-end, especialmente em JavaScript, React e TypeScript,' +
      ' também busco expandir meus conhecimentos no back-end para me tornar full-stack. Tenho o objetivo de criar soluções eficientes e atraentes, sempre focando ' +
      ' na experiência do usuário e no design intuitivo. Se você busca alguém inovador, ' +
      ' com paixão por resolver problemas e sempre disposto a aprender, estou pronto para transformar ideias em realidade! 🚀',
    owner: {
      avatar_url: Img,
    },
    html_url: 'https://finofurodeluxo.com.br/',
  };

  return (
    <>
      <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>
        Desenvolvedor
      </h3>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Front End.</h2>

      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectCard width={cardWidth} project={project} />
      </Box>

      <ImageWrapper>
        <AstronautImage src={Img || null} alt="Astronaut" />
      </ImageWrapper>

      <Box
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <SmallRoundedIcons />
      </Box>
    </>
  );
};

export default Home;

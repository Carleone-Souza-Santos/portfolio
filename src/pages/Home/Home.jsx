import React, { useState, useEffect } from 'react';
import { Box } from './style/StyleHome';
import { ProjectCard } from '../../components/Card/Card';
import { IconsLinks } from '../../components/Links/Links';

export const Home = () => {
  const [cardWidth, setCardWidth] = useState(
    window.innerWidth < 700 ? '100%' : '1000px',
  );

  // Definindo o estado isExpanded como true para começar aberto
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const resizeEvent = () => {
      setCardWidth(window.innerWidth < 700 ? '100%' : '1000px');
    };

    window.addEventListener('resize', resizeEvent);
    return () => window.removeEventListener('resize', resizeEvent);
  }, []);

  // Dados do projeto
  const project = {
    name: 'Hello Turma!',
    description:
      'Meu nome é Carleone Santos, sou desenvolvedor criativo e apaixonado por tecnologia. Com experiência em front-end, especialmente em JavaScript, React e TypeScript,' +
      ' também busco expandir meus conhecimentos no back-end para me tornar full-stack. Tenho o objetivo de criar soluções eficientes e atraentes, sempre focando ' +
      ' na experiência do usuário e no design intuitivo. Se você busca alguém inovador, ' +
      ' com paixão por resolver problemas e sempre disposto a aprender, estou pronto para transformar ideias em realidade! ',
    html_url: 'https://github.com/Carleone-Souza-Santos/portfolio',
  };

  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectCard
          width={cardWidth}
          project={project}
          isExpanded={isExpanded}
        />
      </Box>

      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        {/* obs => icons */}
        <IconsLinks />
      </Box>
    </>
  );
};

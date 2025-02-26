// src/components/Skills.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Card } from '../styles/StyleSorftSkil';
import Modal from '../components/Modal';
const skills = [
  {
    img: '/iconhtml.png',
    title: 'HTML',
    description: 'Linguagem de marcação para estruturação web.',
    path: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content',
  },
  {
    img: '/iconCss.png',
    title: 'CSS',
    description: 'Estiliza páginas web com design responsivo.',
    path: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  },
  {
    img: '/iconBotstrap.png',
    title: 'Bootstrap',
    description: 'Framework CSS para criação rápida de layouts.',
    path: 'https://www.w3schools.com/bootstrap5/index.php',
  },
  {
    img: '/icongithub.png',
    title: 'Git / GitHub',
    description: 'Controle de versão e hospedagem de código.',
    path: 'https://git-scm.com/book/en/v2',
  },
  {
    img: '/iconjavascript.png',
    title: 'JavaScript',
    description: 'Linguagem de programação para web interativa.',
    path: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide',
  },
  {
    img: '/iconnode.png',
    title: 'Node.js',
    description: 'Runtime JavaScript para back-end escalável.',
    path: 'https://nodejs.org/docs/latest/api/module.html',
  },
  {
    img: '/icon-api.png',
    title: 'API',
    description: 'Interface para comunicação entre sistemas.',
    path: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Client-side_APIs',
  },
  {
    img: '/iconreact.png',
    title: 'React',
    description: 'Biblioteca JavaScript para interfaces dinâmicas.',
    path: 'https://pt-br.react.dev/',
  },
  {
    img: '/Tailwind.jpg',
    title: 'Tailwind CSS',
    description: 'Framework utilitário para estilização rápida.',
    path: 'https://v2.tailwindcss.com/docs',
  },
  {
    img: '/material.png',
    title: 'Material UI',
    description: 'Componentes estilizados para React.',
    path: 'https://v4.mui.com/pt/getting-started/usage/',
  },
  {
    img: '/mongodb.png',
    title: 'MongoDB',
    description: 'Banco de dados NoSQL orientado a documentos.',
    path: 'https://www.mongodb.com/pt-br/docs/',
  },
  {
    img: '/iconSql.png',
    title: 'SQL',
    description: 'Linguagem para bancos de dados relacionais.',
    path: 'https://learn.microsoft.com/pt-br/sql/?view=sql-server-ver16',
  },
];

const sorftSkil = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (path) => {
    if (path) {
      if (path.startsWith('http')) {
        window.open(path, '_blank');
      } else {
        navigate(path);
      }
    }
  };

  return (
    <Container>
      <Row>
        {skills.map((skill, index) => (
          <Card
            key={index}
            onClick={() => handleClick(skill.path)}
            style={{ cursor: skill.path ? 'pointer' : 'default' }}
          >
            <img src={skill.img} alt={skill.title} />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </Card>
        ))}
      </Row>

      <Modal show={showModal} close={() => setShowModal(false)}></Modal>
    </Container>
  );
};

export default sorftSkil;

// src/components/Skills.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Card } from './style/StyleHardSkil';
import { hardSkills } from '../../service/ImgHardSkill/HardsSkill';
import Modal from '../../components/Modal/Modal';

const hardsSkills = () => {
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
        {hardSkills.map((skill, index) => (
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

export default hardsSkills;

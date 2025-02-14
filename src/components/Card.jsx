import React from 'react';
import { Card } from 'antd';

const ProjectCard = ({ project }) => {
  const avatarUrl =
    project.owner?.avatar_url || 'https://via.placeholder.com/100';

  return (
    <Card
      title={project.name}
      bordered={false}
      style={{ width: 200, margin: '30px' }}
      cover={
        <img
          alt="Programador Carll"
          style={{ width: '60px' }}
          src={avatarUrl}
        />
      }
    >
      <p>
        <strong>Linguagem:</strong> {project.language}
      </p>
      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
        visualize
      </a>
    </Card>
  );
};

export default ProjectCard;

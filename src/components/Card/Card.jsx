import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { theme } from '../../styles/theme';

export const ProjectCard = ({ project, width }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const avatarUrl = null;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const cardBackgroundColor = isExpanded
    ? theme.colors.border
    : theme.colors.accent;

  return (
    <Card
      style={{
        width: width || 200,
        margin: '30px',
        background: cardBackgroundColor,
        border: 'none',
        padding: '20px',
      }}
      cover={
        avatarUrl ? (
          <img alt="Dev" style={{ width: '30px' }} src={avatarUrl} />
        ) : null
      }
    >
      <p>
        <strong>Hello!</strong> {project.language}
      </p>

      <Button
        onClick={toggleExpand}
        shape="circle"
        icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
        style={{ marginBottom: '10px' }}
      />

      <div
        style={{
          maxHeight: isExpanded ? '1000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 1.2s ease-in-out',
        }}
      >
        <div style={{ padding: isExpanded ? '10px 0' : '0px' }}>
          <p>{project.description || 'Desenvolvimento...'}</p>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
            Acesso
          </a>
        </div>
      </div>
    </Card>
  );
};

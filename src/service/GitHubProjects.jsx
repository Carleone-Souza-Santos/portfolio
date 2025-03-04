import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/Card';
import { Row, Col } from 'antd';

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchGitHubProjects = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_GITHUB_API_URL);

      if (!response.ok) {
        throw new Error('Erro ao carregar os projetos');
      }

      const data = await response.json();
      const filteredProjects = filterProjects(data);

      setProjects(filteredProjects);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const filterProjects = (projectsData) => {
    return projectsData
      .filter((project) => project.language === 'JavaScript' || 'TypeScript')
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 5);
  };

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  if (loading) return <p>Carregando projetos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Row gutter={[14, 14]}>
      {projects.map((project) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={4} key={project.id}>
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );
};

export default GitHubProjects;

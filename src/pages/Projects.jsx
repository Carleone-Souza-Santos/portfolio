import React from 'react';
import GitHubProjects from '../service/gitServic';
import { Box } from '../styles/StyleHome';

const Projects = () => {
  return (
    <>
      <h1> Projetos</h1>
      <Box>
        <GitHubProjects />
      </Box>
    </>
  );
};

export default Projects;

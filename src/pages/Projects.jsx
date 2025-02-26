import React from 'react';
import GitProjects from '../service/GitHubProjects';
import { Box } from '../styles/StyleHome';

const Projects = () => {
  return (
    <>
      <h1> Projetos</h1>
      <Box>
        <GitProjects />
      </Box>
    </>
  );
};

export default Projects;

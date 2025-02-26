import React from 'react';
import GitProjects from '../service/GitHubProjects';
import { Box } from '../styles/StyleHome';

const Projects = () => {
  return (
    <>
      <Box>
        <GitProjects />
      </Box>
    </>
  );
};

export default Projects;

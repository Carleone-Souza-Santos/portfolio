import React from 'react';
import GitProjects from '../service/GitHubProjects';
import { Box } from '../styles/StyleHome';

const Projects = () => {
  return (
    <>
      <Box>
        {/* onde esta localizado proj do github */}
        <GitProjects />
      </Box>
    </>
  );
};

export default Projects;

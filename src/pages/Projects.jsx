import React from 'react';
import GitHubProjects from '../service/gitServic';
import styled from 'styled-components';

const Projects = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1>Javascript</h1>
      </div>
      <GitHubProjects />
    </>
  );
};

export default Projects;

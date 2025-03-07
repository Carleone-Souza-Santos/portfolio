// Projects
import React from 'react';
// api
import GitProjects from '../../service/api/GitHubProjects';
// styles
import { Box } from '../Home/style/StyleHome';
// imagens dos projetos
import { projectsServices } from '../../service/ImgProjects/ImgProjects';
// componente de card
import { CustomCard } from '../../components/Custom/CustomCard';

const Projects = (img) => {
  return (
    <>
      <Box style={{ marginTop: '15px' }}>
        {projectsServices.map((img) => (
          <CustomCard
            key={img.id}
            image={img.image}
            link={img.link}
            avatar={img.avatar}
            description={img.description}
            path={img.path}
          />
        ))}
      </Box>
      {/* API GitHub */}
      <GitProjects />
    </>
  );
};

export default Projects;

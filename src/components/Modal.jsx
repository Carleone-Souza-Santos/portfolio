import React from 'react';
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Content,
  Avatar,
  Title,
  Message,
  ProjectName,
} from '../styles/ModalStyle';

const Modal = ({ show, close, project }) => {
  if (!show) {
    return null;
  }

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={close}>X</CloseButton>
        <Content>
          {project && project.owner && project.owner.avatar_url ? (
            <Avatar
              src={project.owner.avatar_url}
              alt={`Avatar de ${project.owner.login}`}
            />
          ) : (
            <Avatar
              src="https://avatars.githubusercontent.com/u/109290792?s=400&u=808f03981b3842b88d1f12709b004f3c331884b4&v=4"
              alt="Author"
            />
          )}

          <Title>Hello Word</Title>
          <Message>
            Clique nos cards para aprender mais sobre cada tecnologia. Explore
            os links e comece sua jornada de aprendizagem. Bons Estudos!
          </Message>
          {project && project.name && <ProjectName>{project.name}</ProjectName>}
        </Content>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

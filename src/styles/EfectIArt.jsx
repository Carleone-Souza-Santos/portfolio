import styled, { keyframes } from 'styled-components';

const gravity = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ImageWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const AstronautImage = styled.img`
  height: 300px;
  width: auto;
  animation: ${gravity} 2s ease-in-out infinite;

  @media (max-width: 600px) {
    display: none;
  }
`;

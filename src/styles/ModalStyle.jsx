import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-out;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  min-width: 300px;
  max-width: 500px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: scaleUp 0.3s ease-out;
  max-height: 80vh;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Message = styled.p`
  font-size: 16px;
  color: #555;
  margin: 10px 0;
`;

export const ProjectName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

// Animações
export const fadeIn = `
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const scaleUp = `
  0% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

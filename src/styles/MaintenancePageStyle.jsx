import styled from 'styled-components';

export const MaintenanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const MaintenanceContent = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.colors.shadow};
  max-width: 500px;
  width: 100%;
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const MaintenanceIcon = styled.div`
  margin: 20px 0;
`;

export const IconImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 50%;
`;

export const ContactInfo = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

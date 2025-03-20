import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 10px;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

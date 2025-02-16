import React from 'react';
import { FooterContainer } from '../styles/FooterStyle';

const Footer = ({ isDark }) => {
  return (
    <>
      <FooterContainer isDark={isDark}>
        © 2025 - Carleon Todos os direitos reservados
      </FooterContainer>
    </>
  );
};

export default Footer;

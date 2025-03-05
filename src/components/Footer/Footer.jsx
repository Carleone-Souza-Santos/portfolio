import React from 'react';
import { FooterContainer } from './style/FooterStyle';

const Footer = ({ isDark }) => {
  return (
    <>
      <FooterContainer isDark={isDark}>
        © 2025 - Carleone Todos os direitos reservados
      </FooterContainer>
    </>
  );
};

export default Footer;

import React, { useState } from 'react';
import {
  HeaderContainer,
  Title,
  Nav,
  NavLink,
  ToggleButton,
  ButtonContainer,
} from '../styles/StyleHeader';
import { GlobalStyles } from '../styles/GlobalStyles';
import Buttaplic from './Button';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <GlobalStyles isDark={isDark} />
      <HeaderContainer isDark={isDark}>
        <Title>🚀 Seja bem-vindo!</Title>
        <ButtonContainer>
          <ToggleButton
            onClick={toggleDarkMode}
            title={isDark ? 'Clique  modo claro' : 'Clique  modo escuro'}
          >
            {isDark ? '🌙' : '🌞'}
          </ToggleButton>
          <Buttaplic isDark={isDark} />
        </ButtonContainer>
      </HeaderContainer>
      <Nav>
        <NavLink to="/" isDark={isDark}>
          Home
        </NavLink>
        <NavLink to="/skills" isDark={isDark}>
          Habilidades
        </NavLink>
        <NavLink to="/projects" isDark={isDark}>
          Projetos
        </NavLink>
      </Nav>
    </>
  );
};

export default Header;

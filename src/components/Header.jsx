import React, { useState } from 'react';
import {
  HeaderContainer,
  Title,
  Nav,
  NavLink,
  ToggleButton,
  ButtonContainer,
  MenuButton,
} from '../styles/StyleHeader';
import { GlobalStyles } from '../styles/GlobalStyles';
import Buttaplic from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <>
      <GlobalStyles isDark={isDark} />
      <HeaderContainer isDark={isDark}>
        <Title style={{ height: 15 }}>📚 Seja bem-vindo!</Title>

        <ButtonContainer>
          <ToggleButton
            onClick={toggleDarkMode}
            title={isDark ? 'Clique  modo claro' : 'Clique  modo escuro'}
          >
            {isDark ? '🌙' : '🌞'}
          </ToggleButton>
          <Buttaplic isDark={isDark} />

          <MenuButton onClick={toggleMenu} isDark={isDark}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </ButtonContainer>
      </HeaderContainer>

      <Nav isOpen={isOpen}>
        <NavLink
          to="/"
          isDark={isDark}
          onClick={() => handleLinkClick('/')}
          active={activeLink === '/'}
        >
          Home
        </NavLink>
        <NavLink
          to="/skills"
          isDark={isDark}
          onClick={() => handleLinkClick('/skills')}
          active={activeLink === '/skills'}
        >
          Habilidades
        </NavLink>
        <NavLink
          to="/projects"
          isDark={isDark}
          onClick={() => handleLinkClick('/projects')}
          active={activeLink === '/projects'}
        >
          Projetos
        </NavLink>
      </Nav>
    </>
  );
};

export default Header;

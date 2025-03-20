import React, { useState } from 'react';
import {
  HeaderContainer,
  Title,
  Nav,
  ButtonContainer,
  MenuButton,
  NavButton,
} from './style/StyleHeader';
import { BellNotification } from '../BellNotification/BellNotification';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { Button } from '@mui/material';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Home, Build, Work, DarkMode, LightMode } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
    navigate(link);
  };

  return (
    <>
      <GlobalStyles $isDark={isDark} />
      <HeaderContainer $isDark={isDark}>
        <Title>Portfólio</Title>
        <ButtonContainer>
          <Button
            variant="contained"
            onClick={toggleDarkMode}
            title={isDark ? 'Modo escuro' : 'Modo claro'}
            style={{
              height: 30,
              width: 40,
              backgroundColor: isDark ? '#333' : '#fff',
              color: isDark ? '#fff' : '#333',
            }}
          >
            {isDark ? <DarkMode /> : <LightMode />}
          </Button>
          <MenuButton onClick={toggleMenu} $isDark={isDark}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
          <BellNotification />
        </ButtonContainer>
      </HeaderContainer>

      <Nav $isOpen={isOpen} $isDark={isDark}>
        <NavButton
          onClick={() => handleClick('/')}
          $active={activeLink === '/'}
        >
          <Home />
        </NavButton>

        <NavButton
          onClick={() => handleClick('/skills')}
          $active={activeLink === '/skills'}
        >
          <Build />
        </NavButton>

        <NavButton
          onClick={() => handleClick('/projects')}
          $active={activeLink === '/projects'}
        >
          <Work />
        </NavButton>
      </Nav>
    </>
  );
};

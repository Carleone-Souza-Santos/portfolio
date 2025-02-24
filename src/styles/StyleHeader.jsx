import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background: ${({ isDark, theme }) =>
    isDark ? '#333' : theme.colors.primary};
  color: ${({ isDark }) => (isDark ? 'white' : 'black')};
  box-shadow: 10px 10px 15px rgba(61, 52, 52, 0.2);
  height: 50px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`
  padding: 20px;
  text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.822);

  @media (max-width: 600px) {
    padding: 0px;
    font-size: 15px;
  }
`;

export const Nav = styled.nav`
  text-align: end;
  padding: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;

  @media (max-width: 600px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column; /* Empilha os itens */
    align-items: center; /
    position: absolute;
    top: 50px;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    width: 100%;
    padding: 20px;
    z-index: 10;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme, isDark, active }) =>
    active ? theme.colors.secondary : isDark ? 'white' : theme.colors.link};
  margin: 0 25px;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s ease-in-out;

  @media (max-width: 600px) {
    margin: 3px 0;
    font-size: 18px;
    text-align: center;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 18px;
  color: ${({ isDark }) => (isDark ? 'white' : 'black')};

  &:hover {
    background-color: ${({ isDark }) => (isDark ? '#444' : '#ddd')};
    border-radius: 50%;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ isDark }) => (isDark ? 'white' : 'black')};

  @media (max-width: 600px) {
    display: block;
  }
`;

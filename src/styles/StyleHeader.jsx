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
`;

export const Title = styled.h1`
  padding: 20px;
  text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.822);
`;

export const Nav = styled.nav`
  text-align: end;
  padding: 18px;
`;

export const NavLink = styled(Link)`
  color: ${({ theme, isDark }) => (isDark ? 'white' : theme.colors.link)};
  margin: 0 25px;
  text-decoration: none;
  font-size: 16px;

  position: relative;
  padding-bottom: 2px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
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

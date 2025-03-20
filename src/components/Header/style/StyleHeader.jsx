import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ $isDark, theme }) =>
    $isDark ? '#333' : theme.colors.primary};
  color: ${({ $isDark }) => ($isDark ? 'white' : 'black')};
  box-shadow: 10px 10px 15px rgba(61, 52, 52, 0.2);
  height: 50px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`
  margin-top: 40px;
  padding: 20px;
  text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.822);

  @media (max-width: 600px) {
    padding: 0px;
    font-size: 15px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin: 5px;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(51, 48, 48, 0.603);
  z-index: 10;
  background: '#ffffff44';
  transition: left 0.3s ease-in-out;

  &:hover {
    left: 12px;
  }

  @media (max-width: 600px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    transition: left 0.2s ease-in-out;
    left: 0;
  }
`;

export const NavButton = styled.button`
  display: block;
  background-color: ${({ theme, $isDark, $active }) =>
    $active ? theme.colors.secondary : $isDark ? '#444' : 'transparent'};
  color: ${({ $isDark }) => ($isDark ? 'white' : 'black')};
  margin: 6px;
  padding: 5px;
  text-decoration: none;
  font-size: 5px;
  text-align: center;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $isDark }) =>
      $isDark ? theme.colors.secondary : theme.colors.primary};
    box-shadow: 2px 2px 10px rgba(51, 48, 48, 0.603);
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-right: 15px;
  gap: 15px;
  align-items: center;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 15px;
  color: ${({ $isDark }) => ($isDark ? 'white' : 'black')};

  &:hover {
    background-color: ${({ $isDark }) => ($isDark ? '#444' : '#ddd')};
    border-radius: 50%;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  cursor: pointer;
  color: ${({ $isDark }) => ($isDark ? 'white' : 'black')};

  @media (max-width: 600px) {
    display: block;
  }
`;

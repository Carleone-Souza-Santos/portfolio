import { createGlobalStyle } from 'styled-components';
import bgImage from '../assets/background.jpg';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.typography.fontFamily}
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    color: ${({ theme, $isDark }) => ($isDark ? '#fff' : theme.colors.text)};
    position: relative;
  }


  body {
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $isDark }) =>
      $isDark ? 'rgba(0, 0, 0, 0.7)' : 'transparent'};
    z-index: -1;
  }

  #root {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
  }
`;

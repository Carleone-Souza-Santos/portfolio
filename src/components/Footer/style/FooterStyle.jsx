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

//cores do themer

// primary: '#647790',
// secondary: '#ffffff',
// text: '#1b222e',
// link: '#171718',
// accent: '#fffefd4b',
// border: '#E5E7EB',
// success: '#10B981',
// error: '#EF4444',
// warning: '#F59E0B',
// info: '#60A5FA',

import styled from 'styled-components';

export const IconStyle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.hover ? props.theme.colors.primary : '#ffffff'};
  color: ${(props) =>
    props.hover ? props.theme.colors.secondary : props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
`;

import styled from 'styled-components';

export const IconStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.hover ? 'primary' : '#ffffff')};
  color: ${(props) => (props.hover ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
`;

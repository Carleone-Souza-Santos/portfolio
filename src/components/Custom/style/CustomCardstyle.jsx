import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  height: 200px;
  width: 180px;
  background: #ffffff47;
  border: none;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(31, 30, 30, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.404);
    background-color: #05054988;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 200px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 200px;
    margin: 5px;
  }
`;

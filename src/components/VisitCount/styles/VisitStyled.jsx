import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 70px;
  right: 10px;
  width: 100px;
  padding: 10px;
  background: linear-gradient(45deg, #2196f3, #9c27b0);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;

  @media (max-width: 600px) {
    width: 80px;
    padding: 8px;
    bottom: 60px;
  }
`;

export const Text = styled.div`
  width: 100%;
`;

export const Notice = styled.div`
  font-size: 12px;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Number = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

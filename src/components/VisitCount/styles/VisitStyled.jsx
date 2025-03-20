import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 45px;
  right: 40px;
  width: 90px;
  padding: 10px;
  background: linear-gradient(45deg, #585d6167, #28568be6);
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
  font-size: 10px;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Number = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

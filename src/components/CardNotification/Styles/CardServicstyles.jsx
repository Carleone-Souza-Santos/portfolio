import styled from 'styled-components';

export const AlertWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #f0f0f0;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

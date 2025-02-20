import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const Card = styled.div`
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 220px;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
  transition: 1s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 1px 2px white;
    transition: 1s ease-in-out;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    color: #b0b0b0;
    font-size: 0.8rem;
  }
`;

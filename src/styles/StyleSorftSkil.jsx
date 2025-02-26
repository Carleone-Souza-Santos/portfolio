import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 30px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const Card = styled.div`
  background-color: #2d2d2d;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 150px;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 2px white;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
  }

  h3 {
    font-size: 0.9rem;
    color: #fff;
    margin-bottom: 5px;
  }

  p {
    color: #b0b0b0;
    font-size: 0.7rem;
  }
`;

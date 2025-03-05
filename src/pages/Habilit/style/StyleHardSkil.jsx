import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 15px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
  }
`;

export const Card = styled.div`
  gap: 10px;
  background-color: #2d2d2d;

  padding: 0px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 120px;
  height: 140px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 2px white;
  }

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
    align-self: center;
  }

  h3 {
    font-size: 0.9rem;
    color: #fff;
    margin-bottom: 5px;
    text-align: center;
  }

  p {
    color: #b0b0b0;
    font-size: 0.7rem;
    text-align: center;
    flex-grow: 1;
  }

  @media (max-width: 800px) {
    width: 100px;
    height: 120px;
    padding: 0;

    img {
      width: 40px;
      height: 40px;
    }

    h3 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 500px) {
    width: 90px;
    height: 130px;
    padding: 0;

    img {
      width: 35px;
      height: 35px;
    }

    h3 {
      font-size: 0.7rem;
    }

    p {
      font-size: 0.5rem;
    }
  }
`;

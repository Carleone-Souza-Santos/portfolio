import styled from 'styled-components';

export const BoxContainerCarrossel = styled.div`
  align-items: center;
  width: 70%;
  padding: 10px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 77%;
  }
`;

export const CarouselContainer = styled.div`
  width: 40%;
  max-width: 1500px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SlideImage = styled.img`
  width: 90%;
  height: auto;
  border-radius: 8px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
`;

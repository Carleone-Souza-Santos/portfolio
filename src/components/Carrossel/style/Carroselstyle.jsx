import styled from 'styled-components';

export const BoxContainerCarrossel = styled.div`
  position: fixed;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  left: 10px;
  width: 150px;
  height: 250px;
  z-index: 1000;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 120px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 100px;
    bottom: 20px;
  }
`;

export const CarouselContainer = styled.div`
  padding: 10px;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideImage = styled.img`
  padding: 5px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

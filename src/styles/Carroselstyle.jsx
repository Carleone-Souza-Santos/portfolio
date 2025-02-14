import styled from 'styled-components';

export const BoxContainerCarrossel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 10px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 70%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 77%;
  }
`;

export const CarouselContainer = styled.div`
  width: 40%; /* Menor largura para cada carrossel */
  max-width: 350px; /* Tamanho máximo reduzido */

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
`;

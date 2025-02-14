import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  BoxContainerCarrossel,
  CarouselWrapper,
  CarouselContainer,
  SlideImage,
} from '../styles/Carroselstyle';

const images = [
  'iconhtml.png',
  './iconBotstrap.png',
  'iconCss.png',
  './iconnode.png',
  './icon-api.png',
];
const images2 = [
  './icongithub.png',
  './iconjavascript.png',
  './iconreact.png',
  './iconnode.png',
  './iconSql.png',
];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const settings2 = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <BoxContainerCarrossel>
      <CarouselWrapper>
        <CarouselContainer>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <SlideImage src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </CarouselContainer>
        <CarouselContainer>
          <Slider {...settings2}>
            {images2.map((img, index) => (
              <div key={index}>
                <SlideImage src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </CarouselContainer>
      </CarouselWrapper>
    </BoxContainerCarrossel>
  );
};

export default Carousel;

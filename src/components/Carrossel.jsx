import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  BoxContainerCarrossel,
  CarouselContainer,
  SlideImage,
} from '../styles/Carroselstyle';

const images = [
  'iconhtml.png',
  'iconCss.png',
  'iconBotstrap.png',
  'iconjavascript.png',
  'iconnode.png',
  'iconSql.png',
  'icon-api.png',
  'iconreact.png',
  'icongithub.png',
];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <BoxContainerCarrossel>
      <CarouselContainer>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <SlideImage src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </BoxContainerCarrossel>
  );
};

export default Carousel;

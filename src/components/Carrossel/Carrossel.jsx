import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  BoxContainerCarrossel,
  CarouselContainer,
  SlideImage,
} from './style/Carroselstyle';

const logo = [
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
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    arrows: false,
  };

  return (
    <BoxContainerCarrossel>
      <CarouselContainer>
        <Slider {...settings}>
          {logo.map((img, index) => (
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

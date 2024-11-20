import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
import { WrapperSliderStyle } from "./style";

const SliderComponent = ({ arrImages }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };
  return (
    <WrapperSliderStyle {...settings} style={{width: '50%'}}>
      {arrImages.map((image) => {
        return <Image src={image} key={image} alt="slider" preview={false} width="100%"/>;
      })}
    </WrapperSliderStyle>
  );
};

export default SliderComponent;

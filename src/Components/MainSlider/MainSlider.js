import React from "react";
import Slider from "react-slick";
import thumb1 from ".././../img/thumbnail1.png";
import thumb2 from ".././../img/thumbnail2.png";
import thumb3 from ".././../img/thumbnail3.png";
import thumb4 from ".././../img/thumbnail4.png";
import thumb5 from ".././../img/thumbnail5.png";
import thumb6 from ".././../img/thumbnail6.png";
import thumb7 from ".././../img/thumbnail7.png";
import thumb8 from ".././../img/thumbnail8.png";
import thumb9 from ".././../img/thumbnail9.png";
import thumb10 from ".././../img/thumbnail10.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./MainSlider.module.css";

const MainSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={style.container}>
      <Slider {...settings}>
        <img src={thumb1} alt="thumb1" />
        <img src={thumb2} alt="thumb2" />
        <img src={thumb3} alt="thumb3" />
        <img src={thumb4} alt="thumb4" />
        <img src={thumb5} alt="thumb5" />
        <img src={thumb6} alt="thumb6" />
        <img src={thumb7} alt="thumb7" />
        <img src={thumb8} alt="thumb8" />
        <img src={thumb9} alt="thumb9" />
        <img src={thumb10} alt="thumb10" />
      </Slider>
    </div>
  );
};

export default MainSlider;

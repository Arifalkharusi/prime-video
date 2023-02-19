import React from "react";
import Slider from "../Slider/Slider";
import MainSlider from "../MainSlider/MainSlider";
import Nav from "../Nav/Nav";

import style from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={style.container}>
      <Nav />
      <MainSlider />
      <div className={style.content}>
        <Slider page={1} />
        <Slider page={2} />
        <Slider page={3} />
        <Slider page={4} />
        <Slider page={5} />
        <Slider page={6} />
        <Slider page={7} />
      </div>
    </div>
  );
};

export default Home;

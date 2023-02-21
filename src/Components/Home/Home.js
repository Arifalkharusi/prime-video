import React from "react";
import Slider from "../Slider/Slider";
import MainSlider from "../MainSlider/MainSlider";
import style from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={style.container}>
      <MainSlider />
      <div className={style.content}>
        {[1, 2].map((x) => (
          <Slider page={x} />
        ))}
      </div>
    </div>
  );
};

export default Home;

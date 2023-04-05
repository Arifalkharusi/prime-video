import React from "react";
import Slider from "../Slider/Slider";
import MainSlider from "../MainSlider/MainSlider";
import style from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={style.container}>
      <MainSlider />
      <div className={style.content}>
        {[1, 2, 3, 4, 5].map((x, i) => (
          <Slider page={x} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;

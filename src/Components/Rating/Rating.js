import React from "react";
import style from "./Rating.module.css";

const Rating = ({ rate }) => {
  const rating = `${Math.round((rate / 10) * 100)}%`;

  return (
    <div>
      <div className={style.outer}>
        <div className={style.inner} style={{ width: rating }}></div>
      </div>
    </div>
  );
};

export default Rating;

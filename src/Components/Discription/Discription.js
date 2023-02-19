import React from "react";
import style from "./Discription.module.css";

const Name = ({ movie }) => {
  const year = (movie) => {
    const date = movie.release_date.split("-");
    return date[0];
  };
  return (
    <div>
      <div className={style.botsection}>
        <div className={style.watch}>
          <div>Watch with Prime</div>
          <div className={style.play}>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className={style.info}>
          <div>{movie.title}</div>
          <p>{movie.overview}</p>
        </div>
        <div className={style.rating}>
          <div className={style.rate}>{movie.vote_average}</div>
          <div>{year(movie)}</div>
        </div>
      </div>
    </div>
  );
};

export default Name;

import React from "react";
import style from "./Movie.module.css";
import Discription from "../Discription/Discription";

const Movie = ({ movie }) => {
  const imgPath = "https://image.tmdb.org/t/p/original";

  return (
    <div className={style.wraper}>
      <div className={style.movie}>
        <div className={style.prime}></div>
        <div className={style.photo}>
          <img src={`${imgPath}${movie.poster_path}`} alt="poster" />
        </div>
        <Discription movie={movie} />
      </div>
    </div>
  );
};

export default Movie;

import React from "react";
import style from "./Movie.module.css";
import Rating from "../Rating/Rating";
import { useDispatch } from "react-redux";
import { movieHandler } from "../../store/movies";

const Movie = ({ movie }) => {
  const imgPath = "https://image.tmdb.org/t/p/original";

  const year = (movie) => {
    const date = movie.release_date.split("-");
    return date[0];
  };

  const dispatch = useDispatch();

  return (
    <div className={style.wraper}>
      <div
        className={style.movie}
        onClick={() => dispatch(movieHandler(movie))}
      >
        <div className={style.prime}></div>
        <div className={style.photo}>
          <img src={`${imgPath}${movie.poster_path}`} alt="" />
        </div>
        <div className={style.botwrapper}>
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
              <Rating rate={movie.vote_average} />
              <div>{year(movie)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favHandler } from "../../store/movies";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import style from "./Favourite.module.css";

const Favourite = () => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.movie.fav);

  useEffect(() => {
    dispatch(favHandler());
  }, [dispatch]);

  return (
    <div className={style.container}>
      {favList.map(
        (x, i) =>
          x.poster_path && (
            <Link to="/preview">
              <Movie movie={x} key={i} />
            </Link>
          )
      )}
    </div>
  );
};

export default Favourite;

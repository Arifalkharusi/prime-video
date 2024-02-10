import React, { useEffect, useState } from "react";
import style from "./Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchHandler, movieHandler } from "../../store/movies";

const Nav = (props) => {
  const [searchInput, setSearchInput] = useState(``);
  const [results, setResults] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchHandler(searchInput));
    navigate("/search");
    setSearchInput("");
  };

  const liveSearchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/search/multi?query=${searchInput}&api_key=abc2763a0c32e1349d709408b65f5222&page=1sort_by=popularity.desc`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  }, [searchInput]);

  return (
    <div className={style.container}>
      <div className={style.left}>
        <Link to="/">
          <h1>prime video</h1>
        </Link>
        <div>Home</div>
        <div>Store</div>

        <div>
          <div>Categories</div>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => liveSearchHandler(e)}
        />
        <div className={searchInput !== "" && style.show}>
          {results.map(
            (x, i) =>
              i < 5 &&
              x.poster_path && (
                <div
                  className={style.livesearch}
                  onClick={() => {
                    dispatch(movieHandler(x));
                    navigate("/preview");
                    setSearchInput("");
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${x?.poster_path}`}
                    alt=""
                  />
                  <div>
                    <div className={style.title}>
                      {x?.title ? x?.title : x?.name}
                    </div>
                    <div className={style.info}>{`${x?.vote_average.toFixed(
                      2
                    )} | ${x?.media_type.toUpperCase()} | ${
                      x?.release_date?.split("-")[0] ||
                      x?.first_air_date?.split("-")[0]
                    }`}</div>
                  </div>
                </div>
              )
          )}
        </div>
      </form>
      <div className={style.right}>
        <Link to="/fav">
          <div>Menu</div>
        </Link>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Nav;

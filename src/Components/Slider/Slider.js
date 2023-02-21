import React, { useEffect, useRef, useState } from "react";
import style from "../Slider/Slider.module.css";
import Movie from "../Movie/Movie";
import Loading from "../Loading/Loading";
import logo from ".././../img/prime-logo.png";

import { Link } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=abc2763a0c32e1349d709408b65f5222";
const POPULAR_MOVIES = `${BASE_URL}discover/movie?sort_by=popularity.desc&${API_KEY}`;

const Slider = ({ page }) => {
  const listRef = useRef();
  const [slideNum, setSlideNum] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data.results);
  };
  useEffect(() => {
    let done = false;
    if (!done) {
      fetchMovies(`${POPULAR_MOVIES}&page=${page}`);
      console.log("hello");
    }
    return () => {
      done = true;
    };
  }, [page]);

  console.log(data);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 55;
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      listRef.current.style.transform = `translateX(${325 + distance}px)`;
    } else if (direction === "right" && slideNum < data.length) {
      setSlideNum(slideNum + 1);
      listRef.current.style.transform = `translateX(${-325 + distance}px)`;
    }
  };

  return (
    <div>
      <div className={style.heading}>
        <img src={logo} alt="" />
        <div className={style.title}>Originals and Exclusives</div>
        <div className={style.seemore}>see more</div>
      </div>
      <div className={style.silder} style={{ zIndex: 100 - page }}>
        <button
          className={style.left}
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div ref={listRef}>
          {data.map((x, i) =>
            data.length > 0 ? (
              <Link to="/preview">
                <Movie movie={x} key={i} />
              </Link>
            ) : (
              <Loading key={i} />
            )
          )}
        </div>
        <button className={style.right} onClick={() => handleClick("right")}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;

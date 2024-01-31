import React, { useCallback, useEffect, useState } from "react";
import style from "./Search.module.css";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const search = useSelector((state) => state.movie.search);

  const fetchDataInLoop = useCallback(async () => {
    const urls = [
      `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=abc2763a0c32e1349d709408b65f5222&page=1`,
      `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=abc2763a0c32e1349d709408b65f5222&page=2`,
    ];

    let data = [];

    for (const url of urls) {
      const response = await fetch(url);
      const result = await response.json();
      data = [...data, ...result.results];
    }

    setSearchResults(data);
  }, [search]);

  useEffect(() => {
    fetchDataInLoop();
  }, [fetchDataInLoop]);

  return (
    <div className={style.container}>
      {searchResults.map(
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

export default Search;

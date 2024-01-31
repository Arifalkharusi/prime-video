import React, { useState } from "react";
import style from "./Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchHandler } from "../../store/movies";

const Nav = (props) => {
  const [searchInput, setSearchInput] = useState(``);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchInput);
    dispatch(searchHandler(searchInput));
    navigate("/search");
  };

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
          onChange={(e) => setSearchInput(e.target.value)}
        />
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

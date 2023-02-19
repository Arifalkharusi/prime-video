import React from "react";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h1>prime video</h1>
        <div>Home</div>
        <div>Store</div>
        <div>Channels</div>
        <div>
          <div>Categories</div>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div>My Stuff</div>
        <div>Sports</div>
      </div>
      <div className={style.right}>
        <div>Menu</div>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import style from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={style.footer}>
      <div className={style.backbtn} onClick={() => window.scrollTo(0, 0)}>
        <div>Back to top</div>
      </div>
      <div className={style.links}>
        <div>
          <h2>Get to Know Us</h2>
          <span>Careers</span>
          <span>About Us</span>
          <span>UK Modern Slavery Statement</span>
          <span>Sustainability</span>
          <span>Amazon Science</span>
        </div>
        <div>
          <h2>Make Money with Us</h2>
          <span>Careers</span>
          <span>About Us</span>
          <span>UK Modern Slavery Statement</span>
          <span>Sustainability</span>
          <span>Amazon Science</span>
        </div>
        <div>
          <h2>Amazon Payment Methods</h2>
          <span>Careers</span>
          <span>About Us</span>
          <span>UK Modern Slavery Statement</span>
          <span>Sustainability</span>
          <span>Amazon Science</span>
        </div>
        <div>
          <h2>Let Us Help You</h2>
          <span>Careers</span>
          <span>About Us</span>
          <span>UK Modern Slavery Statement</span>
          <span>Sustainability</span>
          <span>Amazon Science</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

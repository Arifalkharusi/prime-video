import React from "react";
import style from "./Preview.module.css";
import Rating from "../Rating/Rating";
import hd from ".././../img/hd.png";
import imdb from ".././../img/imdb.png";
import logo from ".././../img/prime-logo.png";
import Slider from "../Slider/Slider";
import { useSelector } from "react-redux";

const Preview = (props) => {
  const imgPath = "https://image.tmdb.org/t/p/original";

  const data = useSelector((state) => state.movie.data);

  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <img
            className={style.backdrop}
            src={`${imgPath}${data.backdrop_path}`}
            alt=""
          />
          <div className={style.discription}>
            <div className={style.content}>
              <h1>{data.title}</h1>
              <div className={style.info}>
                <Rating rate={data.vote_average} />
                <span>({data.vote_count})</span>
                <img className={style.imdb} src={imdb} alt="" />
                <div>{data.vote_average}</div>
                <div>2 h 19 min</div>
                <img className={style.hd} src={hd} alt="" />
              </div>
              <p>{data.overview}</p>
              <table>
                <tbody>
                  <tr>
                    <td>Directors</td>
                    <td>
                      <span>J.D. Dillard</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Starring</td>
                    <td>
                      <span>Jonathan Majors</span>, <span>Glen Powell</span>,
                      <span>Christina Jackson</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Genres</td>
                    <td>
                      <span>Drama</span>, <span>Action</span>,
                      <span>Military and War</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Subtitles</td>
                    <td>English [CC], Français</td>
                  </tr>
                  <tr>
                    <td>Audio Languages</td>
                    <td>English , English [Audio Description]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={style.watch}>
          <div className={style.prime}>
            <img src={logo} alt="" />
            <div>Watch for £0.00 with Prime</div>
          </div>
          <div className={style.play}>
            <div>
              <p>Watch with Prime</p>
              <p>Start your 30-day free trial</p>
            </div>
            <i className="fa-solid fa-play"></i>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className={style.terms}>
            <p>
              By ordering or viewing, you agree to our <span>Terms</span>. Sold
              by Amazon Digital UK Limited.
            </p>
            <div className={style.icons}>
              <div>
                <i class="fa-solid fa-share-nodes"></i>
                <div>Share</div>
              </div>
              <div>
                <i class="fa-solid fa-pencil"></i>
                <div>Write review</div>
              </div>
              <div>
                <i class="fa-regular fa-lightbulb"></i>
                <div>Feedback</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.slider}>
            <Slider page={40} />
            <Slider page={50} />
            <Slider page={60} />
            <Slider page={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

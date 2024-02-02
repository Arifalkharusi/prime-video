import React, { useEffect, useState } from "react";
import style from "./Play.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateHandler } from "../../store/movies";

const Play = () => {
  const [season, setSeason] = useState([]);

  const dispatch = useDispatch();
  const content = useSelector((state) => state.movie.data);
  const progress = useSelector((state) => state.movie.info);
  console.log(progress);

  useEffect(() => {
    const tvDetails = `https://api.themoviedb.org/3/tv/${content.id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmMyNzYzYTBjMzJlMTM0OWQ3MDk0MDhiNjVmNTIyMiIsInN1YiI6IjYzZWYxM2E1ZWE4NGM3MDBiMjljZTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78LJki1B2eYDrYohH0sDsYblPpOuaG53O3eaOqO8i74",
      },
    };

    content.media_type === "tv" &&
      fetch(tvDetails, options)
        .then((res) => res.json())
        .then((data) => setSeason(data.seasons));

    const fav = JSON.parse(localStorage.getItem("fav"));
    const index = fav.findIndex((x) => x.id === content.id);

    if (fav[index]?.progress !== undefined) {
      dispatch(
        updateHandler({
          season: fav[index].progress[0],
          episode: fav[index].progress[1],
        })
      );
    }
  }, [content, dispatch]);

  useEffect(() => {
    if (season[0]?.name === "Specials") {
      let arr = season.splice(1);
      setSeason(arr);
    }
  }, [season]);

  return (
    <div>
      <div>
        <div className={style.title}>
          {content.original_title
            ? content.original_title
            : content.original_name}
        </div>
        {content.media_type === "tv" && (
          <div className={style.info}>
            <select
              name=""
              id=""
              value={progress.season}
              onChange={(e) =>
                dispatch(
                  updateHandler({
                    season: +e.target.value,
                    episode: 1,
                  })
                )
              }
            >
              {season.map((_, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <div className={style.season}>
              {[...Array(season[progress.season - 1]?.episode_count)].map(
                (_, i) => (
                  <div
                    className={`${
                      i + 1 === progress.episode && style.selected_ep
                    } ${style.current_ep}`}
                    onClick={() =>
                      dispatch(
                        updateHandler({
                          ...progress,
                          episode: i + 1,
                        })
                      )
                    }
                  >
                    {i + 1}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
      <div className={style.video}>
        <iframe
          title="vid"
          src={
            content.media_type === "movie"
              ? `https://vidsrc.to/embed/movie/${content.id}`
              : `https://vidsrc.to/embed/tv/${content.id}/${progress.season}/${progress.episode}`
          }
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Play;

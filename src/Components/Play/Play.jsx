import React, { useEffect, useState } from "react";
import style from "./Play.module.css";
import { useSelector } from "react-redux";

const Play = () => {
  const [season, setSeason] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [episode, setEpisode] = useState(1);

  const content = useSelector((state) => state.movie.data);
  console.log(content.id);

  const tvDetails = `https://api.themoviedb.org/3/tv/${content.id}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmMyNzYzYTBjMzJlMTM0OWQ3MDk0MDhiNjVmNTIyMiIsInN1YiI6IjYzZWYxM2E1ZWE4NGM3MDBiMjljZTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78LJki1B2eYDrYohH0sDsYblPpOuaG53O3eaOqO8i74",
    },
  };

  useEffect(() => {
    content.media_type === "tv" &&
      fetch(tvDetails, options)
        .then((res) => res.json())
        .then((data) => setSeason(data.seasons));
  }, []);

  useEffect(() => {
    if (season[0]?.name === "Specials") {
      let arr = season.splice(1);
      setSeason(arr);
    }
  }, [season]);

  useEffect(() => {
    setEpisode(1);
  }, [selectedSeason]);

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
              onChange={(e) => setSelectedSeason(e.target.value)}
            >
              {season.map((_, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <div className={style.season}>
              {[...Array(season[selectedSeason - 1]?.episode_count)].map(
                (_, i) => (
                  <div
                    className={`${i + 1 === episode && style.selected_ep} ${
                      style.current_ep
                    }`}
                    onClick={() => setEpisode(i + 1)}
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
          src={
            content.media_type === "movie"
              ? `https://vidsrc.to/embed/movie/${content.id}`
              : `https://vidsrc.to/embed/tv/${content.id}/${selectedSeason}/${episode}`
          }
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Play;

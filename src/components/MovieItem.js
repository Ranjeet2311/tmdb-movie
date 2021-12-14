import React from "react";
import "./MovieItem.scss";

const imgpath = "https://image.tmdb.org/t/p/w200";
const unAvailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

function MovieItem(props) {
  const { name, title, overview, poster_path, release_date } = props.movie;
  return (
    <div className="movie-item-wrapper">
      <div className="movie-item">
        <img
          className="poster"
          src={poster_path ? imgpath + poster_path : unAvailable}
          alt="poster"
        />
      </div>
      <div className="details">
        <p className="title">Title: {title ? title : name}</p>
        <p className="title">{release_date}</p>
        {/* <span>Media : {media_type}</span> <span>Vote : {vote_average}</span> */}
        {/* <p>Overview: {overview}</p> */}
      </div>
    </div>
  );
}

export default MovieItem;

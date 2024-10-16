import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import nodata from "../../assets/nodata.webp";

const SingleMovieCard = ({ movie }) => {
  const { id, original_title, vote_average, poster_path } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : nodata;
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <div style={{ height: "400px", backgroundColor: "white" }}>
          <img className="movie-image" src={image} alt="MovieImage" />
        </div>
      </Link>
      <div className="movie-details">
        <span className="movie-title">{original_title}</span>
        <p className="movie-rating">Rating: {vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default SingleMovieCard;

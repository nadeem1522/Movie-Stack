import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import nodata from "../../assets/nodata.webp";

import "./style.css";
import CastList from "../CastListComponent/CastList";

const SingleMovieDetail = () => {
  // const params = useParams();
  // const [movie, setMovie] = useState({});
  // const image = movie.poster_path
  //   ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  //   : nodata;

  // const backgroundImage = movie.backdrop_path
  //   ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
  //   : "";

  // useEffect(() => {
  //   async function fetchMovieDetails() {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/movie/${params.id}?api_key=c45a857c193f6302f2b5061c3b85e743`
  //     );
  //     const json = await response.json();
  //     setMovie(json);
  //   }
  //   fetchMovieDetails();
  // }, [params.id]);

  // return (
  //   <div className="movie-detail-page">
  //     <div
  //       className={`movie-detail-container ${
  //         backgroundImage ? "with-background" : ""
  //       }`}
  //     >
  //       <div className="movie-detail-1">
  //         <img className="movie-detail-image" src={image} alt="" />
  //         <div className="movie-detail-content">
  //           <span className="movie-detail-title">{movie?.title}</span>
  //           <span className="movie-detail-rating">
  //             Rating: {movie?.vote_average?.toFixed(1)}
  //           </span>
  //           <div className="movie-details-genres">
  //             <span className="movie-details-time">{movie.runtime} min</span>
  //             <p className="movie-detail-genre">
  //               {movie?.genres
  //                 ? movie?.genres.map((genre) => (
  //                     <span className="genre" key={genre.id}>
  //                       {genre.name},
  //                     </span>
  //                   ))
  //                 : ""}
  //             </p>
  //           </div>
  //           <p className="movie-detail-description">
  //             Realease Date: {movie?.release_date}
  //           </p>
  //         </div>
  //       </div>
  //       <div
  //         style={{
  //           marginTop: "12px",
  //           display: "flex",
  //           flexDirection: "column",
  //           gap: "10px",
  //         }}
  //       >
  //         <span style={{ fontSize: "1.5rem" }}>Overview</span>
  //         <p className="movie-detail-description">{movie.overview}</p>
  //       </div>
  //       <div className="backgrondImage" style={{ width: "50%" }}>
  //         <img
  //           className="movie-detail-backgrondimage"
  //           src={backgroundImage}
  //           alt=""
  //         />
  //       </div>
  //     </div>
  //     <div
  //       style={{
  //         marginTop: "12px",
  //         display: "flex",
  //         flexDirection: "column",
  //         gap: "12px",
  //       }}
  //     >
  //       <span style={{ fontSize: "1.3rem" }}>Cast</span>
  //       <CastList id={params.id} />
  //     </div>
  //   </div>
  // );
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : nodata;

  const backgroundImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    : "";
  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=c45a857c193f6302f2b5061c3b85e743`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovieDetails();
  }, [params.id]);

  return (
    <div className="movie-detail-page">
      <div
        className="background-img"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          backgroundColor: "#0c0d0f",
          padding: "16px",
        }}
      >
        <div className="movie-detail-container">
          <div className="movie-detail-1">
            <img className="movie-detail-image" src={image} alt="" />
            <div className="movie-detail-content">
              <span className="movie-detail-title">{movie?.title}</span>
              <span className="movie-detail-rating">
                Rating: {movie?.vote_average?.toFixed(1)}
              </span>
              <div className="movie-details-genres">
                <span className="movie-details-time">{movie.runtime} min</span>
                <p className="movie-detail-genre">
                  {movie?.genres
                    ? movie?.genres.map((genre) => (
                        <span className="genre" key={genre.id}>
                          {genre.name},
                        </span>
                      ))
                    : ""}
                </p>
              </div>
              <p className="movie-detail-description">
                Realease Date: {movie?.release_date}
              </p>
            </div>
          </div>
          <div
            className="detail"
            style={{
              marginTop: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>Overview</span>
            <p className="movie-detail-description">{movie.overview}</p>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img
            className="movie-detail-backgrondimage"
            src={backgroundImage}
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <span style={{ fontSize: "1.3rem" }}>Cast</span>
        <CastList id={params.id} />
      </div>
    </div>
  );
};

export default SingleMovieDetail;

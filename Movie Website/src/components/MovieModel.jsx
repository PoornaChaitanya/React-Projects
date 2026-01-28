import React from "react";
import "./styles/MovieModel.css";

const MovieModel = ({ movie, closeModel }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={closeModel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModel}>
          ✕
        </button>

        <div className="modal-left">
          <img src={movie.poster} alt={movie.title} />
        </div>

        <div className="modal-right">
          <h2>
            {movie.title} ({movie.year})
          </h2>
          <p className="rating">⭐ {movie.rating}</p>
          <p className="overview">{movie.overview}</p>
          <button className="trailer-btn">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default MovieModel;

import React, { useState, useEffect } from "react";
import "./App.css";
import mockMovies from "./data.js";
import MovieCard from "./components/MovieCard.jsx";
import MovieModel from "./components/MovieModel.jsx";
import Header from "./components/Header.jsx";

const MOVIES_INITIAL = 20;
const MOVIES_PER_LOAD = 10;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(MOVIES_INITIAL);
  const [modelMovie, setModelMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortYear, setSortYear] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  useEffect(() => {
  setVisibleCount(MOVIES_INITIAL);
}, [sortYear]);


  const handleMoreMovies = () =>
    setVisibleCount((prev) => prev + MOVIES_PER_LOAD);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedMovies = [...filteredMovies];

  if (sortYear === "asc") {
    sortedMovies.sort((a, b) => a.year - b.year);
  } else if (sortYear === "desc") {
    sortedMovies.sort((a, b) => b.year - a.year);
  }

  const displayMovies = sortedMovies.slice(0, visibleCount);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortYear={sortYear}
        setSortYear={setSortYear}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="movie-list">
        {displayMovies.map((movie) => (
          <MovieCard movie={movie} openModel={setModelMovie} />
        ))}
      </div>
      {visibleCount < filteredMovies.length && !searchTerm && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleMoreMovies}>
            Show More
          </button>
        </div>
      )}

      {modelMovie && (
        <MovieModel movie={modelMovie} closeModel={() => setModelMovie(null)} />
      )}
    </div>
  );
};

export default App;

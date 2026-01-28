import React from "react";
import "./styles/Header.css";

const Header = ({
  searchTerm,
  setSearchTerm,
  sortYear,
  setSortYear,
  darkMode,
  setDarkMode,
}) => {
  return (
    <header>
      <div className="logo">
        <h1>CineFlix</h1>
      </div>
      <div className="header-controls">
        <input
          type="text"
          placeholder="Search Movies.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortYear || ""}
          onChange={(e) => setSortYear(e.target.value)}
        >
          <option value="">Sort By Year</option>
          <option value="asc">Year Ascending</option>
          <option value="desc">Year Descending</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Dark Mode
        </label>
      </div>
    </header>
  );
};

export default Header;

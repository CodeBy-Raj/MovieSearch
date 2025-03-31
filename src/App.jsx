import { StyleSheet, Text, useState, View } from "react";
import { React, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Movies from "./Movies";

const API_URL = "http://www.omdbapi.com?apikey=50bf1373";

// const sample = {
//   Title: "Working Title",
//   Year: "1992",
//   imdbID: "tt0250823",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMTAwMDQwMjAwMDBeQTJeQWpwZ15BbWU3MDc4NTAyNTc@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}  
        />

        <img 
        src={SearchIcon} 
        alt="search" 
        onClick={()=> searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((sample) => (
            <Movies sample={sample} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>NO movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

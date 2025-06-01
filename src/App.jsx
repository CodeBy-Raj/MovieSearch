import {  useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Movies from "./Movies";

const API_URL = "http://www.omdbapi.com?apikey=50bf1373";



const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };

  useEffect(() => {
    if(searchTerm){
      searchMovies(searchTerm);
    }
    else searchMovies("Spiderman");
  }, [searchTerm]);

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

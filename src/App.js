import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.scss";
import Genre from "./components/Genre";
import MovieItem from "./components/MovieItem";
// import useGenre from "./components/useGenre";

function App() {
  const [movies, setMovies] = useState();
  const [selectGenere, setSelectGenere] = useState([]);
  const [genere, setGenere] = useState();
  // const genreAddress = useGenre(setGenere);

  const genreAddress = () => {
    const GenreIds = setGenere.map((gen) => gen.id);

    return GenreIds.reduce(
      (accumulator, current) => accumulator + "," + current
    );
  };

  const getMovieRequest = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=1&with_genres=${genreAddress}`
    );

    // console.log("data :" + data.results);

    setMovies(data.results);

    console.log(data.results);
  };

  useEffect(() => {
    getMovieRequest();
    // eslint-disable-next-line
  }, [genreAddress]);

  const ButtonClickHandler = () => {
    console.log("btn clicked");
  };

  return (
    <div className="App">
      <div className="left-column">
        <h1>TMDB Movie App</h1>

        <Genre
          type="movie"
          selectGenere={selectGenere}
          setSelectGenere={setSelectGenere}
          genere={genere}
          setGenere={setGenere}
          onClick={ButtonClickHandler}
        />
      </div>

      <div className="movie-container">
        {movies &&
          movies.map((movie, i) => {
            return <MovieItem movie={movie} key={i} />;
          })}
      </div>
    </div>
  );
}

export default App;

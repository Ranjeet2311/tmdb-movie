import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.scss";
import Genre from "./components/Genre";
import MovieItem from "./components/MovieItem";
import useGenre from "./components/useGenre";

// const genereList = [
//   { id: 28, name: "Action" },
//   { id: 12, name: "Adventure" },
//   { id: 16, name: "Animation" },
//   { id: 35, name: "Comedy" },
//   { id: 80, name: "Crime" },
//   { id: 99, name: "Documentary" },
//   { id: 18, name: "Drama" },
//   { id: 10751, name: "Family" },
//   { id: 14, name: "Fantasy" },
//   { id: 36, name: "History" },
//   { id: 27, name: "Horror" },
//   { id: 10402, name: "Music" },
//   { id: 9648, name: "Mystery" },
//   { id: 10749, name: "Romance" },
//   { id: 878, name: "Science Fiction" },
//   { id: 10770, name: "TV Movie" },
//   { id: 53, name: "Thriller" },
//   { id: 10752, name: "War" },
//   { id: 37, name: "Western" },
// ];

function App() {
  const [movies, setMovies] = useState();
  const [selectGenere, setSelectGenere] = useState([]);
  const [genere, setGenere] = useState();
  const genreAddress = useGenre(setGenere);

  // const genreAddress = () => {
  //   const GenreIds = setGenere.map((gen) => gen.id);

  //   return GenreIds.reduce(
  //     (accumulator, current) => accumulator + "," + current
  //   );
  // };

  const getMovieRequest = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=1&with_genres=${genreAddress}`
    );

    // console.log("data :" + data.results);

    setMovies(data.results);

    console.log(data.results);
    // console.log(data.genre);
  };

  useEffect(() => {
    getMovieRequest();
    // eslint-disable-next-line
  }, [genreAdd]);

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
      {/* {movies.map(({ title, overview, poster_path }, i) => { */}

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

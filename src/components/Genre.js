import axios from "axios";
import React, { useEffect } from "react";
import Button from "./Button";

// `https://api.themoviedb.org/3/genre/${...`

function Genre({
  onClick,
  type,
  setSelectGenere,
  selectGenere,
  genere,
  setGenere,
}) {
  const getGenre = async () => {
    const genreData = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );

    setGenere(genreData.data.genres);

    console.log(genreData.data.genres);
    // console.log(genreData.data.genres.id);
    //     console.log(genreData.data.genres.name);
  };

  useEffect(() => {
    getGenre();
    // eslint-disable-next-line

    return () => {
      setGenere({});
    };
  }, [type]);

  // const ClickHandler = () => {
  //   setGenere(genere.filter((gen) => gen.id !== genere.id));
  //   // console.log("Clicked");
  //   // console.log("Clicked" + gen.id)
  // };

  return (
    <div className="genreWrapper">
      {genere &&
        genere.map((g) => {
          return (
            <Button
              onClick={onClick}
              key={g.id}
              label={g.name}
              id={g.id}
              btnClick={onClick}
            />
          );
        })}
    </div>
  );
}

export default Genre;

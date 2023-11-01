import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://myflix-movieapplication-16850a5656e8.herokuapp.com/movies")
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA", data)
      const moviesFromApi = data.map((movie) => {
        return {
          id: movie._id,
          title: movie.Title,
          image: movie.ImagePath,
          description: movie.Description,

          Genre: {
            Name: movie.Genre.Name
          },
          Director: {
            Name: movie.Director.Name
          },

          Featured: movie.Featured
        };
      });
      setMovies(moviesFromApi);
    });
  }, []);

  console.log("MOVIES", movies)

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

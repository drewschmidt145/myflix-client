import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "./main-view.jsx";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "Pulp Fiction",
      Description: "Vincent Vega and Jules Winnfield are hitmen with a penchant for philosophical discussion. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace and his actress wife, Mia.",
      Image: "https://en.wikipedia.org/wiki/Pulp_Fiction#/media/File:Pulp_Fiction_(1994)_poster.jpg",
      Director: "Quentin Tarantino",
      Genre: "Crime"
    },
    {
      id: 2,
      Title: "Interstellar",
      Description: "In Earths future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earths population to a new home via a wormhole..",
      Image: "https://en.wikipedia.org/wiki/Interstellar_(film)#/media/File:Interstellar_film_poster.jpg",
      Director: "Christopher Nolan",
      Genre: "Adventure"
    },
    {
      id: 3,
      Title: "Goodfellas",
      Description: "A young man grows up in the mob and works very hard to advance through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes.",
      Image: "https://en.wikipedia.org/wiki/Goodfellas#/media/File:Goodfellas.jpg",
      Director: "Martin Scorsese",
      Genre: "Crime"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView book={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (Movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          Movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
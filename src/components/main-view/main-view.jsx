import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";



export const MainView = () => {
<<<<<<< Updated upstream
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Pulp Fiction",
      description: "Vincent Vega and Jules Winnfield are hitmen with a penchant for philosophical discussion. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace and his actress wife, Mia.",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
      director: "Quentin Tarantino",
      genre: "Crime"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "In Earths future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earths population to a new home via a wormhole..",
      image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      director: "Christopher Nolan",
      genre: "Adventure"
    },
    {
      id: 3,
      title: "Goodfellas",
      description: "A young man grows up in the mob and works very hard to advance through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes.",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
      director: "Martin Scorsese",
      genre: "Crime"
    }
  ]);
=======
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);

  useEffect(() => {
    if (!token) return;

    fetch("https://myflix-movieapplication-16850a5656e8.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
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
  }, [token]);

  console.log("MOVIES", movies)
>>>>>>> Stashed changes

  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </>
    );
  }

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
      <button>
        onClick={() => {
          setUser=(null);
          setToken=(null);
          localStorage.clear();
        }}
        Logout
      </button>
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

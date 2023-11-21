import PropTypes from "prop-types";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const MovieCard = ({ movie, token, setUser, user }) => {
  const [isFavorite, setIsFavorite] = useState(
    false
  );

  useEffect(() => {

    if (user.favoriteMovies && user.favoriteMovies.includes(movie.id)) {
      setIsFavorite(true);
    }  

  }, [user]);

  
  const addFavoriteMovie = () => {
    fetch(
      `https://myflix-movieapplication-16850a5656e8.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      { method: "POST", headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Failed to add fav movie");
        }
      })
      .then((user) => {
        if (user) {
          alert("successfully added to favorites");
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setIsFavorite(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const removeFavoriteMovie = () => {
    fetch(
      `https://myflix-movieapplication-16850a5656e8.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
        }
      })
      .then((user) => {
        if (user) {
          alert("successfully deleted from favorites");
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setIsFavorite(false);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Card className="shadow p-4 border-0 h-100">
      <Card.Img className="m-2" src={movie.image} />

      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button className="close-open-btn">Open</Button>
        </Link>
       
       <Card.Body className="favorite-btns">
        {!isFavorite ? (
          <Button className="fav-btn" onClick={addFavoriteMovie}>+</Button>
        ) : (
          <Button className="fav-btn" onClick={removeFavoriteMovie}>-</Button>
        )}
      </Card.Body>
      </Card.Body>


    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
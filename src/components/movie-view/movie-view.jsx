import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";
import { Button } from "react-bootstrap";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);
  
  
  return (
    <div className="container">
      <div>
        <img className="movie-image"
          src={movie.image} 
          alt={movie.title}
        />
      </div>
      
      <div className="movie-details">
        <div className="movie-title">
          <span>{movie.title}</span>
        </div>
        <div className="movie-director">
          <span className="primary-text">Director: </span>
          <span>{movie.director.name}</span>
        </div>
        <div className="movie-info">
          <span className="primary-text">Description: </span>
          <span>{movie.description}</span>
        </div>
        <div className="movie-info">
          <span className="primary-text">Genre: </span>
          <span>{movie.genre.name}</span>
        </div>
      </div>
      
      <Link to={`/`}>
        <Button className="back-button" variant="secondary">Back</Button>
      </Link>
    </div>
  );
};

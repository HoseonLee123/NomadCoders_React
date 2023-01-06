import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, poster, title, summary, genres }) {
  return (
    <div>
      <img src={poster} alt="movie poster" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  geners: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;

import "./Movie-Card.scss";
import { IMovie } from "../movies/Movies";

export default function MovieCard({ movie }: { movie: IMovie }) {
  const releaseYear = movie.releaseYear.substring(0, 4);
  const moviePath = "https://image.tmdb.org/t/p/w500" + movie.posterPath;

  return (
    <>
      <div className="movie-card-container">
        <div className="movie-poster">
          <img src={moviePath} alt="test" />
        </div>
        <div className="movie-details">
          <p className="movie-title">{movie.movieTitle}</p>
          <div className="description-container">
            {" "}
            <section className="movie-description">
              <span>Description:</span> {movie.movieDescription}
            </section>
          </div>

          <p className="movie-rating">
            <span>Rating:</span> {movie.movieRating}
          </p>
          <p className="release-year">
            <span>Release year:</span> {releaseYear}
          </p>
        </div>
      </div>
    </>
  );
}

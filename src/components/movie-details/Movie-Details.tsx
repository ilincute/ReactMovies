import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../movies/Movies";
import "./Movie-Details.scss";
import Menu from "../../shared/components/header/Menu";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<IMovie>();
  const movieTrailers = [
    {
      movieName: "Bad Boys: Ride or Die",
      trailerPath:
        "https://www.youtube.com/embed/hRFY_Fesa9Q?si=rCV-kGiZkPxUM9Ay",
    },
    {
      movieName: "Inside Out 2",
      trailerPath:
        "https://www.youtube.com/embed/LEjhY15eCx0?si=xJSA2nYFoXhjt7l7",
    },
  ];

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=45d82ba6e519c627b2c398dc010fe512&append_to_response=credits`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const movie = {
          movieTitle: data.title,
          posterPath: data.poster_path,
          movieDescription: data.overview,
          releaseYear: data.release_date,
          cast: data.credits.cast.slice(0, 5),
          castPhoto: `https://image.tmdb.org/t/p/w500${data.credits.cast[0].profile_path}`,
          movieRating: data.movieRating,
        };
        setMovieDetails({ ...movie });
      });
  });

  return (
    <>
      <div className="movie-details">
        <Menu />
        <div className="movie-details-container">
          <div className="left-container">
            <p className="title">{movieDetails?.movieTitle}</p>
            <p className="description">
              Plot: {movieDetails?.movieDescription}
            </p>
            <div className="cast-container">
              <p>The Cast</p>
              <div className="cast">
                {movieDetails?.cast?.map((item, index) => (
                  <div key={index}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                      alt=""
                    />
                    <p>
                      <span className="actor-name">{item.name}</span> as{" "}
                      <span className="character-name">{item.character}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails?.posterPath}`}
              alt=""
            />
            <p>
              <span>Release date</span>
            </p>
            <iframe
              width="560"
              height="315"
              src={
                "https://www.youtube.com/embed/hRFY_Fesa9Q?si=rCV-kGiZkPxUM9Ay"
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

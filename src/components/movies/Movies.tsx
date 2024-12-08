import "./Movies.scss";
import { useEffect, useState } from "react";
import Menu from "../../shared/components/header/Menu";
import { Search } from "react-bootstrap-icons";
import MovieCard from "../movie-card/Movie-Card";
import { useNavigate } from "react-router-dom";

export interface IMovie {
  posterPath: string;
  movieTitle: string;
  movieDescription: string;
  movieId?: number;
  movieRating?: number;
  releaseYear: string;
  genre?: string[];
  id?: number;
  cast?: [];
  castPhoto?: string;
}

export default function Movies() {
  const navigate = useNavigate();
  const [moviesList, setMoviesList] = useState<IMovie[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredResults = moviesList.filter((item) =>
      item.movieTitle.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
    // console.log("filtered results: ", moviesList);
    // setMoviesList([filteredResults]);
  }, [query, moviesList]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = (event) => {
    const id = event.movieId;
    navigate(`/movie-details/${id}`);
  };

  function addToFavorites() {
    fetch("https://api.themoviedb.org/3/account/21029034/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWQ4MmJhNmU1MTljNjI3YjJjMzk4ZGMwMTBmZTUxMiIsIm5iZiI6MTczMTI1MTYwMC45OTI4NjQ2LCJzdWIiOiI2NWRhMWQyNDlkODkzOTAxNjJkYWM4NGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8YXILY6wPxJRaFCkss_o-C4oGJI_FdKPicIlhICorEA",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: 550,
        favorite: true,
      }),
    }).then(() => {
      console.log("YOU ADDED THE MOVIE TO FAVOURITES");
    });
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=45d82ba6e519c627b2c398dc010fe512",
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("aici: ", data);
        const movieArray = data.results.map((item) => {
          return {
            posterPath: item.poster_path,
            movieTitle: item.title,
            movieDescription: item.overview,
            movieId: item.id,
            releaseYear: item.release_date,
            id: item.id,
            movieRating: Math.round(item.vote_average),
          };
        });
        console.log(moviesList);
        setMoviesList((previousState) => [...previousState, ...movieArray]);
      });
  }, []);

  useEffect(() => {
    fetch("");
  });

  return (
    <>
      <div className="movies-container">
        <Menu />
        <div className="main-container">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={handleSearch}
            />
          </div>
          <div className="movies-list">
            {results.map((item) => (
              <>
                <div>
                  <div
                    key={item.id}
                    onClick={() => handleClick(item)}
                    className="movie-card"
                  >
                    <MovieCard movie={item} />
                  </div>
                  <button onClick={addToFavorites}>Add to favourites</button>
                </div>
              </>
            ))}
          </div>
          <div className="main-image">{/* <img src={imgSrc}></img> */}</div>
        </div>
      </div>
    </>
  );
}

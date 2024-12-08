import { useEffect } from "react";

export default function FavoriteMovies() {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/account/21029034/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWQ4MmJhNmU1MTljNjI3YjJjMzk4ZGMwMTBmZTUxMiIsIm5iZiI6MTczMTI1MTYwMC45OTI4NjQ2LCJzdWIiOiI2NWRhMWQyNDlkODkzOTAxNjJkYWM4NGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8YXILY6wPxJRaFCkss_o-C4oGJI_FdKPicIlhICorEA",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => console.log("favorite movies: ", response));
  });

  return (
    <>
      <div>Hello</div>
    </>
  );
}

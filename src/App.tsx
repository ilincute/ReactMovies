import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import "@fontsource/roboto";
import Login from "./components/login/Login";
import MovieDetails from "./components/movie-details/Movie-Details";
import Movies from "./components/movies/Movies";
import NotFound from "./components/not-found/NotFound";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import ProtectedRoute from "./context/ProtectedRoute";
import FavoriteMovies from "./components/favorite-movies/FavoriteMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/movie-details/:id",
        element: <MovieDetails />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/favorite-movies",
        element: <FavoriteMovies />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

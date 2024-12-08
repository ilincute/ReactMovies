import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // This represents an unauthenticated user
  let user = false;
  if (localStorage.token) {
    user = true;
  }

  console.log("aici: ", user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

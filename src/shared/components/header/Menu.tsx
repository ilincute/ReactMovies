import "./Menu.scss";
import {
  CameraReelsFill,
  DoorClosedFill,
  GearFill,
  HouseDoorFill,
  PersonFill,
} from "react-bootstrap-icons";
import "@fontsource/roboto";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("2");
    // localStorage.removeItem(localStorage.token);

    if (localStorage.token) {
      localStorage.removeItem("token");
    }

    navigate(`/login`);
  };

  return (
    <header className="menu-main-container">
      <div className="name-container">
        <a href="/movies">
          <CameraReelsFill className="film-camera-icon" />
        </a>
        <h2>
          TubeMovie<span>.</span>
        </h2>
      </div>
      <div className="menu-container">
        <h2>Menu</h2>
        <div className="menu-options-container">
          <a href="/movies">
            <HouseDoorFill className="icon" />
          </a>
          <p>Home</p>
        </div>
      </div>
      <div className="general-container">
        <h2>General</h2>
        <div className="menu-options-container">
          <a onClick={() => navigate("/profile")}>
            <PersonFill className="icon" />
          </a>
          <p>Profile</p>
        </div>
        <div className="menu-options-container">
          <GearFill className="icon" />
          <p>Settings</p>
        </div>
        <div className="menu-options-container">
          <DoorClosedFill className="icon" onClick={() => handleClick()} />
          <p>Log out</p>
        </div>
        <div
          className="menu-options-container"
          onClick={() => navigate("/favorite-movies")}
        >
          <p>Favorite movies</p>
        </div>
      </div>
    </header>
  );
}

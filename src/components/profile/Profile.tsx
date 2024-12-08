import Menu from "../../shared/components/header/Menu";
import { useAppSelector } from "../../store/store";
import "./Profile.scss";

export default function Profile() {
  const username = useAppSelector((state) => state.user.username);

  return (
    <>
      <div className="profile-container">
        <Menu />
        <p>Username: {username}</p>
      </div>
    </>
  );
}

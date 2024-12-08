import LoginForm, { LoginUserData } from "../../forms/Login-Form";
import { useNavigate } from "react-router-dom";
import "../register/Register.scss";
import { useDispatch } from "react-redux";
import { setUsername } from "../../store/user/userReducer";

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function onSubmitChange(formData: LoginUserData) {
    setUsername(formData.username);
    if (formData.username && formData.password) {
      fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("avem token: ", data);
          if (data.token) {
            localStorage.setItem("token", data.token);
            dispatch(setUsername(data.user.username));
            navigate("/movies");
          }
        });
    }
  }

  return (
    <>
      <div className="register-container">
        <LoginForm onSubmit={onSubmitChange} />
      </div>
    </>
  );
}

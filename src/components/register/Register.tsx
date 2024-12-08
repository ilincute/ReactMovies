import { Navigate } from "react-router-dom";
import RegisterForm from "../../forms/Register-Form";
import { RegisterUserData } from "../../forms/Register-Form";
import React from "react";
import "./Register.scss";

export default function Register() {
  const [goToLogin, setGotToLogin] = React.useState(false);

  function onSubmitChange(formData: RegisterUserData) {
    fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => setGotToLogin(true))
      .catch((error) => console.error(error));
  }

  if (goToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="register-container">
      <RegisterForm onSubmit={onSubmitChange} />
    </div>
  );
}

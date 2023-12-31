import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Login = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Carlo');

    navigate(lastPath, {
      replace: true
    })
  }
  return (

    <>
      <div className="container mt-5">
        <h1>Login</h1>

        <button
          className="btn btn-primary"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </>
  )
}

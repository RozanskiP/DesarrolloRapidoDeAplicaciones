import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUser } from "../state/Contex";
import { Api_Url } from "../environment";

const SignIn = () => {
  const { login } = useContext(LoggedUser);
  const navigate = useNavigate();

  const [loginText, setLoginText] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState("");

  const handleSetLogin = (e) => setLoginText(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    axios
      .post(Api_Url + "User/Login", {
        login: loginText,
        password: password,
      })
      .then((resp) => {
        if (resp.status === 200) {
          login(resp.data.uuid, resp.data.email, resp.data.login);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        setError("Incorrect login or password!");
        console.log("Error in logging: " + err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-group m-3">
              <label>Login</label>
              <input
                type="text"
                className="form-control"
                name="login"
                placeholder="Login"
                onChange={handleSetLogin}
              />
            </div>
            <div className="form-group m-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={handleSetPassword}
              />
              <small className="text-danger">{error}</small>
            </div>
            <button className="btn btn-success" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

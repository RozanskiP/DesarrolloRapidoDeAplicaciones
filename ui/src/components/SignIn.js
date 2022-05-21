import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUser } from "../state/Contex";
import { Api_Url } from "../environment";
import { useDispatch } from "react-redux";
import { addStudent, addGroup } from "../store/cart";

const SignIn = () => {
  const { login } = useContext(LoggedUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

          axios
            .get(`${Api_Url}StudnetObserve/${resp.data.uuid}`)
            .then((response) => {
              for (let elem in response.data) {
                dispatch(addStudent(response.data[elem]));
              }
            });

          axios
            .get(`${Api_Url}GroupObserve/${resp.data.uuid}`)
            .then((response) => {
              for (let elem in response.data) {
                dispatch(addGroup(response.data[elem]));
              }
            });

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

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUser, UsersContext } from "../state/Contex";

const SignIn = () => {
  const { users } = useContext(UsersContext);
  const { login } = useContext(LoggedUser);
  const navigate = useNavigate();

  const [loginText, setLoginText] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState("");

  const handleSetLogin = (e) => setLoginText(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    for (const number in users) {
      if (
        users[number].login === loginText &&
        users[number].password === password
      ) {
        login(users[number].uuid);
        navigate("/", { replace: true });
      } else {
        setError("Incorrect login or password!");
      }
    }
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

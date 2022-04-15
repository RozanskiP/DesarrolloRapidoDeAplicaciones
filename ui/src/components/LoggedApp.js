import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUser } from "../state/Contex";
import { useDispatch } from "react-redux";
import { refresh } from "../store/cart";

const LoggedApp = (props) => {
  const navigate = useNavigate();
  const { logout } = useContext(LoggedUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(refresh());
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div>
      Hello, {props.loggedUser.login}
      <button className="btn btn-success btn-lg mx-2" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default LoggedApp;

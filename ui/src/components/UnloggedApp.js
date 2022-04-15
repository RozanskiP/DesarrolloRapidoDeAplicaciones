import React from "react";
import { NavLink } from "react-router-dom";

const UnloggedApp = () => {
  return (
    <div>
      <NavLink className="btn btn-success btn-lg mx-2" to="/signin">
        Sign In
      </NavLink>
      <NavLink className="btn btn-success btn-lg mx-2" to="/signup">
        Sign Up
      </NavLink>
    </div>
  );
};

export default UnloggedApp;

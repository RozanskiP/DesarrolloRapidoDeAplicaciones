import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LoggedUser } from "../state/Contex";
import UnloggedApp from "./UnloggedApp";
import LoggedApp from "./LoggedApp";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { loggedUser } = useContext(LoggedUser);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink className="btn btn-dark btn-lg" to="/">
            Menu
          </NavLink>
          <Nav>
            <NavLink
              className="btn btn-secondary mx-3 btn-lg"
              to="/listofstudents"
            >
              Grupa looking for students
            </NavLink>
            <NavLink
              className="btn btn-secondary mx-3 btn-lg"
              to="/listofgroups"
            >
              Student looking for group
            </NavLink>
          </Nav>
          {loggedUser.uuid !== 0 ? (<Nav>
            <NavLink
              className="btn btn-success btn-lg mx-2"
              to="/cartcomp"
            >
              <FaShoppingCart style={{color: 'white'}} />
            </NavLink>
          </Nav>) : null}
          <Nav>
            {loggedUser.uuid === 0 ? (
              <UnloggedApp />
            ) : (
              <LoggedApp loggedUser={loggedUser} />
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

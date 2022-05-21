import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { Api_Url } from "../environment";
import { LoggedUser } from "../state/Contex";

const Student = (props) => {
  const { loggedUser } = useContext(LoggedUser);
  const navigate = useNavigate();

  const handleClickContact = () => {
    navigate(`/listofstudents/${props.student.id}/contact`);
  };

  const handleObserve = (studentId) => {
    if (loggedUser?.uuid !== 0) {
      axios
        .post(`${Api_Url}StudnetObserve`, {
          id: 0,
          userId: loggedUser.uuid,
          studentId: studentId,
        })
        .then((response) => {
          console.log("Added in correct way");
        });
    } else {
      alert("You need login first");
    }
  };

  const handleLoad = (event) => {
    props.setLoaded(true);
  };

  return (
    <Container>
      <div className="m-3">
        <Card className="text-center">
          <Card.Header>{props.student.subject}</Card.Header>
          <Card.Body>
            <Card.Title>{props.student.name}</Card.Title>
            <Card.Text>{props.student.description}</Card.Text>
            <Card.Text>
              <NavLink to={`/listofstudents/${props.student.id}`}>
                <img
                  src={props.student.image}
                  style={props.loaded ? {} : { display: "none" }}
                  onLoad={(event) => handleLoad(event)}
                  alt="Student"
                />
              </NavLink>
            </Card.Text>
            <Card.Text>
              <button
                className="btn btn-success mx-1"
                id={"student-" + props.student.id}
                onClick={handleClickContact}
              >
                Send a application
              </button>
              <button
                className="btn btn-light border border-dark mx-1"
                onClick={() => handleObserve(props.student.id)}
              >
                Observe
              </button>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">{props.student.tags}</Card.Footer>
        </Card>
      </div>
    </Container>
  );
};

export default Student;

import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../store/cart";

const Student = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickContact = () => {
    navigate(`/listofstudents/${props.student.id}/contact`);
  };

  const handleObserve = () => {
    dispatch(addStudent(props.student));
  };

  return (
    <Container>
      <div className="m-3">
        <Card className="text-center">
          <Card.Header>
            {props.student.subject}
          </Card.Header>
          <Card.Body>
            <Card.Title>{props.student.name}</Card.Title>
            <Card.Text>{props.student.description}</Card.Text>
            <Card.Text>
              <NavLink to={`/listofstudents/${props.student.id}`}>
                <img src={props.student.image} alt="not working :(" />
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
                onClick={handleObserve}
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

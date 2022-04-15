import React from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGroup } from "../store/cart";

const Group = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickContact = () => {
    navigate(`/listofgroups/${props.group.id}/contact`);
  };

  const handleObserve = () => {
    dispatch(addGroup(props.group));
  };

  return (
    <Container>
      <div className="m-3">
        <Card className="text-center">
          <Card.Header>{props.group.subject}</Card.Header>
          <Card.Body>
            <Card.Title>{props.group.name}</Card.Title>
            <Card.Text>{props.group.description}</Card.Text>
            <button
              className="btn btn-success"
              id={"group-" + props.group.id}
              onClick={handleClickContact}
            >
              Send the application
            </button>
            <button
              className="btn btn-light border border-dark mx-1"
              onClick={handleObserve}
            >
              Observe
            </button>
          </Card.Body>
          <Card.Footer className="text-muted">
            {props.group.members.map((val) => {
              return (
                <>
                  {val.studentName} - {val.whatStudentTo},{" "}
                </>
              );
            })}
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};

export default Group;

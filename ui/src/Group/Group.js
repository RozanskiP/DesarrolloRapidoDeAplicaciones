import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Api_Url } from "../environment";
import { LoggedUser } from "../state/Contex";
import axios from "axios";

const Group = (props) => {
  const navigate = useNavigate();
  const { loggedUser } = useContext(LoggedUser);

  const handleClickContact = () => {
    navigate(`/listofgroups/${props.group.id}/contact`);
  };

  const handleObserve = (groupId) => {
    if (loggedUser?.uuid !== 0) {
      axios
        .post(`${Api_Url}GroupObserve`, {
          id: 0,
          userId: loggedUser.uuid,
          groupId: groupId,
        })
        .then((response) => {
          console.log("Added in correct way");
        });
    } else {
      alert("You need login first");
    }
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
              onClick={() => handleObserve(props.group.id)}
            >
              Observe
            </button>
          </Card.Body>
          <Card.Footer className="text-muted">
            {props.group.member.map((val) => {
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

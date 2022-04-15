import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { ListOfGroupsContext } from "../state/Contex";

const SendMessage = () => {
  let params = useParams();

  const { groups } = useContext(ListOfGroupsContext);
  let contactGroup = groups.find((s) => s.id === parseInt(params.idGroup, 10));

  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <Card className="text-center">
              <Card.Header>{contactGroup.name}</Card.Header>
              <Card.Body>
                <Card.Title>{contactGroup.subject}</Card.Title>
                <Card.Text>{contactGroup.description}</Card.Text>
                <div className="form-group m-3">
                  <label>Message:</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="3"
                  ></textarea>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                <NavLink className="btn btn-success" to={"/listofgroups"}>
                  Send
                </NavLink>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;

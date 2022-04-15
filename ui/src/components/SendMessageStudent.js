import React, { useContext, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { ListOfStudentsContext } from "../state/Contex";

const SendMessage = () => {
  let params = useParams();

  const { students } = useContext(ListOfStudentsContext);
  let contactStudent = students.find(
    (s) => s.id === parseInt(params.idStudent, 10)
  );

  const refAreaInput = useRef(null);
  useEffect(() => {
    refAreaInput.current?.focus();
  });

  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <Card className="text-center">
              <Card.Header>{contactStudent.name}</Card.Header>
              <Card.Body>
                <Card.Title>{contactStudent.subject}</Card.Title>
                <Card.Text>{contactStudent.description}</Card.Text>
                <div className="form-group m-3">
                  <label>Message:</label>
                  <textarea
                    ref={refAreaInput}
                    className="form-control"
                    name="description"
                    rows="3"
                  />
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                <NavLink className="btn btn-success" to={"/listofstudents"}>
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

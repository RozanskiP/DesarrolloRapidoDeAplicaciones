import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ListOfStudentsContext } from "../state/Contex";

const StudentInfo = () => {
  const { students } = useContext(ListOfStudentsContext);
  let params = useParams();

  let choosenStudent = students.find(
    (s) => s.id === parseInt(params.student, 10)
  );

  return (
    <div className="m-5 px-5">
      <div className="jumbotron">
        <h1 className="display-4">
          {choosenStudent.subject} - {choosenStudent.group}
        </h1>
        <p className="lead">
          <h3>{choosenStudent.name}</h3>
        </p>
        <hr className="my-4" />
        <p>{choosenStudent.description}</p>
        <img src={choosenStudent.image} alt="Student" />
        <hr className="my-4" />
        <p>
          {choosenStudent?.tags.map((val) => {
            return <>{val}, </>;
          })}
        </p>
        <p className="lead">
          <NavLink to={"/listofstudents"} className="btn btn-primary btn-lg">
            Back to list
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default StudentInfo;

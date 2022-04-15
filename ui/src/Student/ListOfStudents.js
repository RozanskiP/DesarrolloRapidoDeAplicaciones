import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Student from "./Student";
import { Container } from "react-bootstrap";
import { ListOfStudentsContext } from "../state/Contex";

const ListOfStudents = () => {
  const { students, setStudents } = useContext(ListOfStudentsContext);

  useEffect(() => {
    setStudents(
      students.map((elem) => {
        if (elem.image === "") {
          fetch("https://picsum.photos/210/300").then((img) => {
            elem.image = img.url;
          });
        }
        return elem;
      })
    );
  }, []);

  // checkboxs
  const [radioCheckbox, setRadioCheckbox] = useState("radioDescriptionStudent");

  // checkbox zmiana
  const handleSetRadioCheckbox = (event) => {
    setRadioCheckbox(event.target.value);
  };

  // filter do inputa
  const [filter, setFilter] = useState("");

  // zmiana filtra do inputa
  const handleSetFilter = (event) => {
    setFilter(event.target.value);
  };

  // lista do sortowania studentow
  const filterListStudents = students.filter((student) => {
    return radioCheckbox === "radioDescriptionStudent"
      ? student.description.toLowerCase().includes(filter.toLowerCase())
      : radioCheckbox === "radioTagsStudent"
      ? student.tags.toString().toLowerCase().includes(filter.toLowerCase())
      : student.subject.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <NavLink className="btn btn-secondary m-2" to="/listofstudents">
        Search for student
      </NavLink>
      <NavLink className="btn btn-secondary m-2" to="/addstudent">
        Add new student
      </NavLink>
      <div>
        <Container>
          <div className="d-flex justify-content-around m-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="radioDescriptionStudent"
                checked={radioCheckbox === "radioDescriptionStudent"}
                onChange={handleSetRadioCheckbox}
              />
              <label className="form-check-label">Opis</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="radioTagsStudent"
                checked={radioCheckbox === "radioTagsStudent"}
                onChange={handleSetRadioCheckbox}
              />
              <label className="form-check-label">Tags</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="radioSubjectStudent"
                checked={radioCheckbox === "radioSubjectStudent"}
                onChange={handleSetRadioCheckbox}
              />
              <label className="form-check-label">Subject</label>
            </div>
          </div>
          <div>
            <div className="input-group input-group-lg">
              <input
                type="text"
                id="search"
                placeholder="Search items descriptions or tags"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleSetFilter}
              />
            </div>
          </div>
        </Container>
        {filterListStudents.map((val, index) => {
          return <Student student={val} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ListOfStudents;

import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ListOfStudentsContext } from "../state/Contex";
import { Api_Url } from "../environment";

const AddStudent = () => {
  const { refreshStudents } = useContext(ListOfStudentsContext);
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [tags, setTags] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();
  const [subject, setSubject] = useState();

  const handleSetName = (e) => setName(e.target.value);
  const handleSetTags = (e) => setTags(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetDescription = (e) => setDescription(e.target.value);
  const handleSetSubject = (e) => setSubject(e.target.value);

  // add student
  const handleSetStudents = () => {
    if (
      tags === undefined ||
      name === undefined ||
      email === undefined ||
      description === undefined ||
      subject === undefined
    ) {
      return;
    }

    axios
      .post(Api_Url + "Student/AddNewStudent", {
        name: name,
        email: email,
        description: description,
        tags: tags,
        image: "",
        subject: subject,
      })
      .then((response) => {
        if (response.request.status === 200) {
          console.log("Correct added student");
          refreshStudents();
        } else {
          console.log("ERROR");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // clear inputs
    setName("");
    setTags("");
    setEmail("");
    setDescription("");
    setSubject("");

    navigate("/listofstudents", { replace: true });
  };

  return (
    <div>
      <NavLink className="btn btn-secondary m-2" to="/listofstudents">
        Search for student
      </NavLink>
      <NavLink className="btn btn-secondary m-2" to="/addstudent">
        Add new student
      </NavLink>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-group m-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                onChange={handleSetName}
              />
              <small id="emailHelp" className="form-text text-muted">
                This name will be your ID
              </small>
            </div>
            <div className="form-group m-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Your email"
                onChange={handleSetEmail}
              />
              <small id="emailHelp" className="form-text text-muted">
                Never share your email with anyone else
              </small>
            </div>
            <div className="form-group m-3">
              <label>Name of Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject Name"
                onChange={handleSetSubject}
              />
            </div>
            <div className="form-group m-3">
              <label>Enter Tags to facilitate searching (decimal)</label>
              <input
                type="text"
                className="form-control"
                name="tags"
                placeholder="Tags"
                onChange={handleSetTags}
              />
            </div>
            <div className="form-group m-3">
              <label>Describe yourself</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                onChange={handleSetDescription}
              ></textarea>
            </div>
            <button className="btn btn-success" onClick={handleSetStudents}>
              Add your application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

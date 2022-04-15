import React, { useContext, useState } from "react";
import ModalInput from "../components/ModalInput";
import { NavLink, useNavigate } from "react-router-dom";
import { ListOfGroupsContext } from "../state/Contex";

const AddGroup = () => {
  const { groups, setGroups } = useContext(ListOfGroupsContext);
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [subject, setSubject] = useState();
  const [numberOfMember, setNumberOfMember] = useState(1);

  const handleSetName = (e) => setName(e.target.value);
  const handleSetDescription = (e) => setDescription(e.target.value);
  const handleSetSubject = (e) => setSubject(e.target.value);
  const handleSetNumberOfMember = (e) => setNumberOfMember(e.target.value);

  const handleSetGroups = () => {
    if (
      name === undefined ||
      description === undefined ||
      subject === undefined
    ) {
      return;
    }

    let groupToChange = {
      id: Number(
        Math.max.apply(
          Math,
          groups.map((value) => {
            return value.id;
          })
        ) + 1
      ),
      name: name,
      description: description,
      subject: subject,
    };

    let temporaryGroupOfMembers = [];
    for (let i = 0; i < Object.keys(member).length / 3; i++) {
      let memberNew = {
        id: 1,
        studentName: member["studentName-" + i],
        email: member["email-" + i],
        whatStudentTo: member["whatStudentTo-" + i],
      };
      temporaryGroupOfMembers.push(memberNew);
    }

    groupToChange.members = temporaryGroupOfMembers;

    const updateGroup = [...groups, groupToChange];
    setGroups(updateGroup);

    // clear inputs
    setName("");
    setDescription("");
    setSubject("");
    setMember("");

    navigate("/listofgroups", { replace: true });
  };

  // set members of group
  const [member, setMember] = useState({});

  const handleSetMember = (event) => {
    const { name, value } = event.target;
    setMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    handleSetGroups();
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <NavLink className="btn btn-secondary m-2" to="/listofgroups">
        Search for a group
      </NavLink>
      <NavLink className="btn btn-secondary m-2" to="/addgroup">
        Group looking for students
      </NavLink>
      <ModalInput
        valueOfMembers={numberOfMember}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        member={member}
        handleSetMember={handleSetMember}
      />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-group m-3">
              <label>Group name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                onChange={handleSetName}
              />
              <small id="emailHelp" className="form-text text-muted">
                It will be you ID
              </small>
            </div>
            <div className="form-group m-3">
              <label>Number of members</label>
              <input
                type="number"
                min="0"
                step="1"
                className="form-control"
                name="numberOfMembers"
                placeholder="Number of members"
                onChange={handleSetNumberOfMember}
              />
            </div>
            <div className="form-group m-3">
              <label>Describe your group</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                onChange={handleSetDescription}
              ></textarea>
            </div>
            <div className="form-group m-3">
              <label>Name of subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject Name"
                onChange={handleSetSubject}
              />
            </div>
            <button className="btn btn-success" onClick={handleShow}>
              Add your group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;

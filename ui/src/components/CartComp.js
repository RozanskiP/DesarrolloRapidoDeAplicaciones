import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, deleteGroup } from "../store/cart";
import { Api_Url } from "../environment";
import axios from "axios";
import { LoggedUser } from "../state/Contex";
import { addStudent, addGroup } from "../store/cart";

const CartComp = () => {
  const { studentsObserve, groupsObserve } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { loggedUser } = useContext(LoggedUser);

  const handleDeleteStudent = (id) => {
    axios.delete(`${Api_Url}StudnetObserve/${id}`).then((response) => {
      if (response.data) {
        dispatch(deleteStudent(id));
      } else {
        alert("Item-student deletion failed");
      }
    });
  };

  const handleDeleteGroup = (id) => {
    axios.delete(`${Api_Url}GroupObserve/${id}`).then((response) => {
      if (response.data) {
        dispatch(deleteGroup(id));
      } else {
        alert("Item-group deletion failed");
      }
    });
  };

  useEffect(() => {
    axios
      .get(`${Api_Url}StudnetObserve/${loggedUser.uuid}`)
      .then((response) => {
        for (let elem in response.data) {
          dispatch(addStudent(response.data[elem]));
        }
      });

    axios.get(`${Api_Url}GroupObserve/${loggedUser.uuid}`).then((response) => {
      for (let elem in response.data) {
        dispatch(addGroup(response.data[elem]));
      }
    });
  }, [studentsObserve, groupsObserve, dispatch]);

  return (
    <div>
      <div>
        Students:
        {studentsObserve.map((elem) => {
          return (
            <div>
              {elem.id} - {elem.userId} - {elem.studentId}
              <button
                className="btn btn-danger m-1"
                onClick={() => handleDeleteStudent(elem.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div>
        Group:
        {groupsObserve.map((elem) => {
          return (
            <div>
              {elem.id} - {elem.userId} - {elem.groupId}
              <button
                className="btn btn-danger m-1"
                onClick={() => handleDeleteGroup(elem.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartComp;

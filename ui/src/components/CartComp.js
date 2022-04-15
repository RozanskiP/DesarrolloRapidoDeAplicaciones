import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, deleteGroup } from "../store/cart";

const CartComp = () => {
  const { students, groups } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleDeleteGroup = (id) => {
    dispatch(deleteGroup(id));
  };

  return (
    <div>
      <div>
        Students:
        {students.map((elem) => {
          return (
            <div>
              {elem.id} - {elem.name}
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
        {groups.map((elem) => {
          return (
            <div>
              {elem.id} - {elem.name}
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

import React from "react";

const InputElemText = (props) => {
  return (
    <div className="form-group m-3">
      <label>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        value={props.studentName}
        placeholder="Imie"
        onChange={props.handleChange}
      />
    </div>
  );
};
export default InputElemText;

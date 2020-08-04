import React from "react";
import "./Form.css";
import Calendar from "react-calendar";

const Form = ({
  value,
  onChange,
  onCreate,
  onKeyPress,
  date,
  onDateChange,
}) => {
  return (
    <div className="form">
      <Calendar onChange={onDateChange} value={date} />
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;

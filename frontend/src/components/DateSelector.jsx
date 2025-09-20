import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({value, onChange}) => {

  return (
    <div>
      <label>Select Session Date</label>
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd-MM-yyyy"
        placeholderText="dd-MM-yyyy"
      />
    </div>
  );
};

export default DateSelector;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); 

  return (
    <div>
      <label>Select Session Date</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd-MM-yyyy"
        // placeholderText="dd-mm-yyyy"  
      />
    </div>
  );
};

export default DateSelector;

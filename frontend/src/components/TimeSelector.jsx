import React, { useState } from "react";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const TimeSelector = ({value, onChange}) => {

  return (
    <div>
      <label className="font-medium">Select Time:</label>
      <TimePicker
        onChange={onChange}
        value={value}
        disableClock={true} 
        clearIcon={null}    
      />
    </div>
  );
};

export default TimeSelector;

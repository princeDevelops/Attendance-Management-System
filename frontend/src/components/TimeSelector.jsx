import React, { useState } from "react";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const TimeSelector = () => {
  const [time, setTime] = useState("10:00");

  return (
    <div>
      <label className="font-medium">Select Time:</label>
      <TimePicker
        onChange={setTime}
        value={time}
        disableClock={true} 
        clearIcon={null}    
      />
      <p className="text-gray-600">Selected Time: {time}</p>
    </div>
  );
};

export default TimeSelector;

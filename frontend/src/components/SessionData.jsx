import React from "react";
import tempWeeklyData from "../data/tempWeeklyData";

const SessionData = () => {
  console.log(tempWeeklyData);

  return (
    <div>
      <h1>This Week's Sessions</h1>
      <div className="flex space-x-4">
        <div className="flex space-x-4">
          <div>Date & Time</div>
          <div>Duration ( mins )</div>
          <div>Faculty</div>
        </div>
        <div>
          {tempWeeklyData.map((week) => {
            return (
              <div>
                <span>
                  {week.date} -- {week.day}--
                </span>
                <span>{week.duration} -- </span>
                <span>{week.faculty}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SessionData;

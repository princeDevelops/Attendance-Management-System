import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import useBatches from "../../hooks/useBatches";
import DateSelector from "../../components/DateSelector";


const ClassSessions = () => {
  const [selected, setSelected] = useState();
  const { batches, loading } = useBatches();

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Navbar />
      <h1>Class Sessions</h1>
      <div>
        <Link to="/class-sessions/add-session"> + Add Session</Link>
        <div>
          {/* Batch Selection */}
          <label htmlFor="batch-name">Select Batch</label>
          <select
            name="batch-name"
            id="batch-name"
            value={selected}
            onChange={handleChange}
          >
            {batches.map((batch) => {
              return (
                <option key={batch.batch_id} value={batch.batch_id}>
                  {batch.batch_name}
                </option>
              );
            })}
          </select>

          {/* Date Selection */}
          <label htmlFor="session-date">Select Date : </label>
          <DateSelector></DateSelector>
          <button>Get Sessions</button>
        </div>
      </div>
    </>
  );
};

export default ClassSessions;

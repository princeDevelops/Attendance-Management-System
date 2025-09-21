import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import useBatches from "../../hooks/useBatches";

const Sessions = () => {
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
        <Link to="/sessions/add-session"> + Add Session</Link>
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
          
          {/* Date Selection Component */}
          <label htmlFor="session-date">Select Session Date</label>
          <input
            id="session-date"
            type="date"
            // value={sessionData.sessionDate}
            // onChange={(e) =>
            //   handleSessionDataChange("sessionDate", e.target.value)
            // }
          />

          <button>Get Sessions</button>
        </div>
      </div>
    </>
  );
};

export default Sessions;

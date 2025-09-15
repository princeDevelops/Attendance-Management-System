import axios from "axios";
import { useState, useEffect } from "react";
import useBatches from "../../hooks/useBatches";

const AddSession = () => {
  const [selected, setSelected] = useState("");
  const { batches, loading} = useBatches();

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You Selected : ${selected}`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Add Session</h1>
      <form onSubmit={handleSubmit}>

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


          {/* Faculty Selection */}
          {/* Subject Selection */}
          {/* Date Selection */}
          {/* Time Selection */}
          {/* Duration */}
          {/* Venue */}
          {/* type */}


      </form>
    </>
  );
};

export default AddSession;

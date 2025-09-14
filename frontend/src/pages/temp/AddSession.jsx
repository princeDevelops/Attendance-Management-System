import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AddSession = () => {
  const [selected, setSelected] = useState("");
  const [batches, setBatches] = useState([]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const fetchBatches = async () => {
    try {
      const res = await axios.get("http://localhost:5000/batches");
      console.log(`here are the batches : ${res.data}`);
      setBatches(res.data);
    } catch (err) {
      console.log(`Error while fetching batches: ${err}`);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  useEffect(() => {
    console.log("Updated batches:", batches);
  }, [batches]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You Selected : ${selected}`);
  };

  return (
    <>
      <h1>Add Session</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="batch-name">Select Batch</label>
        <select
          name="batch-name"
          id="batch-name"
          value={selected}
          onChange={handleChange}
        >
          <option value=""></option>
        </select>
      </form>
    </>
  );
};

export default AddSession;

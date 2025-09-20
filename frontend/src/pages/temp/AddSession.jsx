import axios from "axios";
import { useState, useEffect } from "react";
import useBatches from "../../hooks/useBatches";
import useFaculties from "../../hooks/useFaculties";
import useSubjects from "../../hooks/useSubjects";
import DateSelector from "../../components/DateSelector";
import TimeSelector from "../../components/TimeSelector";
import useVenues from "../../hooks/useVenues";

const AddSession = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedFaculty, setSeelctedFaculty] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const { batches, batchLoading } = useBatches([]);
  const { faculties, facultyLoading } = useFaculties([]);
  const { subjects, loadingSubjects } = useSubjects([]);
  const { venues, loadingVenues} = useVenues([]);

  console.log(subjects);

  const handleBatchCHange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleFacultyChange = (e) => {
    setSeelctedFaculty(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleVenueChange = (e) =>{
    setSelectedVenue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You Selected : ${selectedBatch}`);
  };

  if (batchLoading) return <p>Loading Batches...</p>;
  if (facultyLoading) return <p>Loading Faculties...</p>;

  return (
    <>
      <h1>Add Session</h1>
      <form onSubmit={handleSubmit}>
        {/* Batch Selection */}
        <label htmlFor="batch-name">Select Batch</label>
        <select
          name="batch-name"
          id="batch-name"
          value={selectedBatch}
          onChange={handleBatchCHange}
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

        <label htmlFor="faculty-name">Select Faculty</label>
        <select
          name="faculty-name"
          id="faculty-name"
          value={selectedFaculty}
          onChange={handleFacultyChange}
        >
          {faculties.map((faculty) => {
            return (
              <option key={faculty.first_name} value={faculty.first_name}>
                {faculty.first_name + " " + faculty.last_name}
              </option>
            );
          })}
        </select>

        {/* Subject Selection */}

        <label htmlFor="subject-name">Select Subject</label>
        <select
          name="subject-name"
          id="subject-name"
          value={selectedSubject}
          onChange={handleSubjectChange}
        >
          {subjects.map((subject) => {
            return (
              <option key={subject.subject_name} value={subject.subject_name}>
                {subject.subject_name}
              </option>
            );
          })}
        </select>

        {/* Date Selection */}
        <DateSelector />
        {/* Time Selection */}
        <TimeSelector />

        {/* Duration */}
        <label htmlFor="session-duration">
          Enter Duration (in minutes)
        </label>
        <input
          id="session-duration" // 👈 matches htmlFor
          type="number"
          min="60"
          max="300"
          placeholder="0"
        />

        {/* Venue */}

        <label htmlFor="venue-name">Select Batch</label>
        <select
          name="venue-name"
          id="venue-name"
          value={selectedVenue}
          onChange={handleVenueChange}
        >
          {venues.map((venue) => {
            return (
              <option key={venue.location_id} value={venue.location_name}>
                {venue.location_name}
              </option>
            );
          })}
        </select>
        
        {/* type */}
      </form>
    </>
  );
};

export default AddSession;

import axios from "axios";
import { useEffect, useState } from "react";
import useBatches from "../../hooks/useBatches";
import useFaculties from "../../hooks/useFaculties";
import useSubjects from "../../hooks/useSubjects";
import DateSelector from "../../components/DateSelector";
import TimeSelector from "../../components/TimeSelector";
import useVenues from "../../hooks/useVenues";
import useClassTypes from "../../hooks/useClassTypes";

const AddSession = () => {
  const [sessionData, setSessionData] = useState({
    batch: "",
    faculty: "",
    subject: "",
    duration: "",
    sessionDate: "",
    startTime: "",
    venue: "",
    classType: "",
  });

  const handleSessionDataChange = (field, value) => {
    setSessionData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const { batches = [], batchLoading } = useBatches([]);
  const { faculties = [], facultyLoading } = useFaculties([]);
  const { subjects = [], loadingSubjects } = useSubjects([]);
  const { venues = [], loadingVenues } = useVenues([]);
  const { classTypes = [], classTypesLoading } = useClassTypes([]);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected Batch ID: ${sessionData.batch}`);
    // Later: use axios.post() to send form data to backend
  };

  // Show loading state while data is being fetched
  if (
    batchLoading ||
    facultyLoading ||
    loadingSubjects ||
    loadingVenues ||
    classTypesLoading
  ) {
    return <p>Loading, Please wait...</p>;
  }

  return (
    <>
      <h1>Add Session</h1>
      <form onSubmit={handleSubmit}>
        {/* Batch Selection */}
        <label htmlFor="batch-name">Select Batch</label>
        <select
          id="batch-name"
          value={sessionData.batch}
          onChange={(e) => handleSessionDataChange("batch", e.target.value)}
        >
          <option value="">-- Select Batch --</option>
          {batches.map((batch) => (
            <option key={batch.batch_id} value={batch.batch_id}>
              {batch.batch_name}
            </option>
          ))}
        </select>

        {/* Faculty Selection */}
        <label htmlFor="faculty-name">Select Faculty</label>
        <select
          id="faculty-name"
          value={sessionData.faculty}
          onChange={(e) => handleSessionDataChange("faculty", e.target.value)}
        >
          <option value="">-- Select Faculty --</option>
          {faculties.map((faculty) => (
            <option key={faculty.faculty_id} value={faculty.faculty_id}>
              {faculty.first_name} {faculty.last_name}
            </option>
          ))}
        </select>

        {/* Subject Selection */}
        <label htmlFor="subject-name">Select Subject</label>
        <select
          id="subject-name"
          value={sessionData.subject}
          onChange={(e) => handleSessionDataChange("subject", e.target.value)}
        >
          <option value="">-- Select Subject --</option>
          {subjects.map((subject) => (
            <option key={subject.subject_id} value={subject.subject_id}>
              {subject.subject_name}
            </option>
          ))}
        </select>

        {/* Date Selection Component */}
        <DateSelector
          value={sessionData.sessionDate}
          onChange={(date) => handleSessionDataChange("sessionDate", date)}
        />

        {/* Time Selection Component */}
        <TimeSelector
          value={sessionData.startTime}
          onChange={(time) => handleSessionDataChange("startTime", time)}
        />

        {/* Duration Input */}
        <label htmlFor="session-duration">Enter Duration (in minutes)</label>
        <input
          id="session-duration"
          type="number"
          min="60"
          max="300"
          placeholder="0"
          onChange={(e) => handleSessionDataChange("duration", e.target.value)}
        />

        {/* Venue Selection */}
        <label htmlFor="venue-name">Select Venue</label>
        <select
          id="venue-name"
          value={sessionData.venue}
          onChange={(e) => handleSessionDataChange("venue", e.target.value)}
        >
          <option value="">-- Select Venue --</option>
          {venues.map((venue) => (
            <option key={venue.location_id} value={venue.location_id}>
              {venue.location_name}
            </option>
          ))}
        </select>

        {/* Class Type Selection */}
        <label htmlFor="class-type">Select Class Type</label>
        <select
          id="class-type"
          value={sessionData.classType}
          onChange={(e) => handleSessionDataChange("classType", e.target.value)}
        >
          <option value="">-- Select Class Type --</option>
          {classTypes.map((classType) => (
            <option key={classType.class_type_id} value={classType.type_id}>
              {classType.type_name}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <button type="submit">Create Session</button>
      </form>
    </>
  );
};

export default AddSession;

import axios from "axios";
import { useState } from "react";
import useBatches from "../../hooks/useBatches";
import useFaculties from "../../hooks/useFaculties";
import useSubjects from "../../hooks/useSubjects";
import useVenues from "../../hooks/useVenues";
import useClassTypes from "../../hooks/useClassTypes";

import createSession from "../../services/sessionService";

const AddSession = () => {
  const [sessionData, setSessionData] = useState({
    batch: "",
    faculty: "",
    subject: "",
    duration: "",
    sessionDate: "", // This will now store the YYYY-MM-DD string
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add a validation check for all required fields
    if (
      !sessionData.batch ||
      !sessionData.faculty ||
      !sessionData.subject ||
      !sessionData.duration ||
      !sessionData.sessionDate ||
      !sessionData.startTime ||
      !sessionData.venue ||
      !sessionData.classType
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      // Combine date + time into ISO datetime string
      const session_datetime = new Date(
        `${sessionData.sessionDate}T${sessionData.startTime}:00`
      ).toISOString();

      const payload = {
        session_datetime,
        duration_minutes: parseInt(sessionData.duration, 10),
        batch_id: parseInt(sessionData.batch, 10),
        faculty_id: parseInt(sessionData.faculty, 10),
        subject_id: parseInt(sessionData.subject, 10),
        session_type: sessionData.classType, // now string like "theory"
        location_id: parseInt(sessionData.venue, 10),
        status: "scheduled",
        notes: null,
      };

      console.log("Sending payload:", payload);

      const result = await createSession(payload);

      alert("Session created successfully!");
      console.log(result);

      // Reset form
      setSessionData({
        batch: "",
        faculty: "",
        subject: "",
        duration: "",
        sessionDate: "",
        startTime: "",
        venue: "",
        classType: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create session");
    }
  };

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
        <label htmlFor="session-date">Select Session Date</label>
        <input
          id="session-date"
          type="date"
          value={sessionData.sessionDate}
          onChange={(e) =>
            handleSessionDataChange("sessionDate", e.target.value)
          }
        />

        {/* Time Selection Component */}
        <label htmlFor="session-time">Select Session Time</label>
        <input
          id="session-time"
          type="time"
          value={sessionData.startTime}
          onChange={(e) => handleSessionDataChange("startTime", e.target.value)}
        />

        {/* Duration Input */}
        <label htmlFor="session-duration">Enter Duration (in minutes)</label>
        <input
          id="session-duration"
          type="number"
          min="60"
          max="300"
          placeholder="0"
          value={sessionData.duration}
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
            <option key={classType.class_type_id} value={classType.type_name}>
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

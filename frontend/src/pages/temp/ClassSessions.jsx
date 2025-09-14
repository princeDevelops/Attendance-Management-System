import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ClassSessions = () => {
  return (
    <>
      <Navbar />
      <h1>Class Sessions</h1>
      <div>
        <Link to="/class-sessions/add-session"> + Add Session</Link>
      </div>
    </>
  );
};

export default ClassSessions;

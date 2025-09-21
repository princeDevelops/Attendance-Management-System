import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Weekly Sessions</Link> | {""}
      <Link to="/faculty-sessions">Faculty Sessions</Link> | {""}
      <Link to="/attendance-report">Attendance Report</Link> | {""}
      <Link to="/sessions">Class Sessions</Link>
    </nav>
  );
};

export default Navbar;

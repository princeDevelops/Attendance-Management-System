import { Route, Routes } from "react-router-dom";

import Home from "./pages/temp/Home";
import ClassSessions from "./pages/temp/ClassSessions";
import AttendanceReport from "./pages/temp/AttendanceReport";
import FacultySessions from "./pages/temp/FacultySessions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/class-sessions" element={<ClassSessions />}></Route>
        <Route path="/attendance-report" element={<AttendanceReport />}></Route>
        <Route path="/faculty-sessions" element={<FacultySessions />}></Route>
      </Routes>
    </>
  );
}

export default App;

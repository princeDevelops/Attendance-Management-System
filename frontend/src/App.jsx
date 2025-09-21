import { Route, Routes } from "react-router-dom";

import Home from "./pages/temp/Home";
import Sessions from "./pages/temp/Sesssions";
import AttendanceReport from "./pages/temp/AttendanceReport";
import FacultySessions from "./pages/temp/FacultySessions";
import AddSession from "./pages/temp/AddSession";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sessions" element={<Sessions/>}></Route>
        <Route path="/attendance-report" element={<AttendanceReport />}></Route>
        <Route path="/faculty-sessions" element={<FacultySessions />}></Route>
        <Route path="/sessions/add-session" element={<AddSession/>}></Route>
      </Routes>
    </>
  );
}

export default App;

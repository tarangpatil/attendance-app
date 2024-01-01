import { useState } from 'react';

import EditAttendance from "./components/EditAttendance";
import EditSubject from "./components/EditSubject";
import AddAttendance from "./components/AddAttendance";
import Homepage from "./components/Homepage";

import './App.css'

function App() {

  if (!localStorage.hasOwnProperty("attendancePCCOE")) {
    alert("Looks like you're using this App for the first time!");
    alert("You should start with 'Edit Subjects' to add some subjects first!\n(Sample subject DS has been already added for you)");
    localStorage.setItem("attendancePCCOE", JSON.stringify({
      "DS": {
        attended: 0,
        lectures: 0,
      },
    }))
  }

  const [page, setPage] = useState("Homepage");
  return (
    <>
      <h1>
        Attendance
      </h1>
      <div class="buttons">
        <button onClick={() => { setPage("AddAttendance") }} style={{ backgroundColor: 'green' }}>Add Attendance</button>
        <button onClick={() => { setPage("EditAttendance") }} style={{ backgroundColor: 'red' }}>Edit Attendance</button>
      </div>
      <div class="buttons">
        <button onClick={() => { setPage("EditSubject") }} style={{ backgroundColor: 'blue' }}>Edit Subjects</button>
        <button onClick={() => { setPage("Homepage") }} style={{ backgroundColor: 'deepskyblue' }}>Home</button>
      </div>

      {
        page === "AddAttendance" ? <AddAttendance handlePage={setPage} /> :
          page === "EditSubject" ? <EditSubject /> :
            page === "EditAttendance" ? <EditAttendance handlePage={setPage} /> :
              <Homepage />
      }
      {/* <footer>
        <p>For Help Contact</p>
        <p>tarang.patil21@pccoepune.org</p>
      </footer> */}
    </>
  )
}

export default App;

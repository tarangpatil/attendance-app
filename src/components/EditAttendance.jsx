import { useState } from "react";
import EditWindow from './EditWindow';

export default function EditAttendance(props) {

    let obj = JSON.parse(localStorage.getItem("attendancePCCOE"));

    const [selectedSub, setSelectedSub] = useState(Object.keys(obj).length !== 0 ? Object.keys(obj)[0] : "");

    function handleSubject(event) {
        setSelectedSub(event.target.value);
    }

    let sublist = [];
    for (let i in obj) {
        sublist.push(<option key={i} name={i} value={i}>{i}</option>)
    }

    return (
        <>
            <h1>Edit Attendance</h1>
            <label htmlFor="">
                <h2>Select Subject</h2>
                <select value={selectedSub} onChange={handleSubject} name="subjects" id="select">
                    {sublist}
                </select>
            </label>
            <EditWindow {...obj[selectedSub]} handlePage={props.handlePage} name={selectedSub} />
        </>
    )
}
/*
<div className="attendance">
                <div className="attendance-row">
                    <div className="attendance-row-tile title">Attended Lectures</div>
                    <div className="attendance-row-tile">
                        <input type="number" value={values.attended} onChange={handleChange} name={"attended"} />
                    </div>
                </div>
                <div className="attendance-row">
                    <div className="attendance-row-tile title">Total Lectures</div>
                    <div className="attendance-row-tile">
                        <input type="number" value={values.lectures} onChange={handleChange} name={"lectures"} />
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button onClick={handleClick} style={{ backgroundColor: "green", fontSize: "large" }}>Save</button>
            </div>
 */
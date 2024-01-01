import { useState } from "react";

export default function AddAttendance(props) {
    let obj = JSON.parse(localStorage.getItem("attendancePCCOE"));

    const [selectedSub, setSelectedSub] = useState(Object.keys(obj).length !== 0 ? Object.keys(obj)[0] : "");

    function attendedFunc() {
        obj[selectedSub].attended += 1;
        obj[selectedSub].lectures += 1;

        localStorage.setItem("attendancePCCOE", JSON.stringify(obj));
        alert("Attendance Recorded");
        props.handlePage("Homepage");
    }

    function missedFunc() {
        obj[selectedSub].lectures += 1;

        localStorage.setItem("attendancePCCOE", JSON.stringify(obj));
        alert("Attendance Recorded");
        props.handlePage("Homepage");
    }

    function handleChange(event) {
        setSelectedSub(event.target.value);
    };
    let sublist = [];
    for (let i in obj) {
        // sublist.push(<Subject {...subs[i]} name={i} />)
        sublist.push(<option name={i} value={i}>{i}</option>)
    }
    return (
        <>
            <h1>Add Attendance</h1>
            <label htmlFor="">
                <h2>Select Subject</h2>
                <select value={selectedSub} onChange={handleChange} name="subjects" id="select">
                    {
                        // obj.map(sub => (<option name={sub.name} value={sub.name}>{sub.name}</option>))
                        sublist
                    }
                </select>
            </label>
            <div className="buttons" style={{ margin: "40px 0px" }}>
                <button onClick={attendedFunc} className="lecstate" style={{ backgroundColor: 'green' }}>Lecture Attended</button>
                <button onClick={missedFunc} className="lecstate" style={{ backgroundColor: 'red' }}>Lecture Missed</button>
            </div>
        </>
    )
}

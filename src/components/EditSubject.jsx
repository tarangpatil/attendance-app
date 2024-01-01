import { useState } from "react";

export default function EditSubject() {
    let obj = JSON.parse(localStorage.getItem("attendancePCCOE"));

    let sublist = [];

    const [newName, setNewName] = useState("");
    const [huhhhhh, setHuhhhhh] = useState(true);

    for (let i in obj) {
        sublist.push(
            <div key={i} className="attendance-row">
                <div className="attendance-row-tile">{i}</div>
                <div className="attendance-row-tile">
                    <button onClick={handleDelete} name={i} style={{ backgroundColor: "red" }}>Delete</button>
                </div>
            </div>
        )
    }

    function handleChange(event) {
        setNewName(event.target.value);
    }

    function handleClick() {
        if (newName in obj) { alert("Subject already exists"); setNewName("") }
        else if (newName !== "") {
            obj[newName] = { attended: 0, lectures: 0 };
            localStorage.setItem("attendancePCCOE", JSON.stringify(obj));
            alert("Subject added successfully")
            setNewName("");
        } else {
            alert("Subject name cannot be empty!")
        }
    }

    function handleDelete(event) {
        if (confirm("This action will delete the attendance data of this subject and cannot be undone!Are you sure?")) {
            delete obj[event.target.name];
            localStorage.setItem("attendancePCCOE", JSON.stringify(obj));
            setHuhhhhh(i => !i);
        }
    }

    return (
        <>
            <h1>Edit Subject</h1>
            <div className="add-subject">
                <input type="text" placeholder="Add new subject" value={newName} onChange={handleChange} size={15} />
                <button onClick={handleClick} style={{ backgroundColor: "green" }}>Add Subject</button>
            </div>
            <div className="attendance">
                <div className="attendance-row">
                    <div className="attendance-row-tile title">Subject List</div>
                    <div className="attendance-row-tile title">Action</div>
                </div>
                {sublist}
            </div>
        </>
    )
}
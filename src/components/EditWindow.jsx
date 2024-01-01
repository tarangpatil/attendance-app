import { useEffect, useState } from "react";

export default function EditWindow(props) {

    let obj = JSON.parse(localStorage.getItem("attendancePCCOE"))

    const [values, setValues] = useState({
        attended: props.attended,
        lectures: props.lectures,
    })
    obj[props.name] = values;

    useEffect(() => {
        setValues({
            attended: props.attended,
            lectures: props.lectures,
        })
    }, [props.name])

    function handleChange(event) {
        setValues(prev => ({
            ...prev,
            // [event.target.name]: parseInt(event.target.value) === NaN ? 0 : parseInt(event.target.value),
            [event.target.name]: parseInt(event.target.value),
        }))

    }

    function handleClick() {
        localStorage.setItem("attendancePCCOE", JSON.stringify(obj));
        alert("Attendance Saved");
    }

    return (
        <>
            <div className="attendance" style={{ marginBottom: "15px" }}>
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
            <p className="note">*NOTE: AFTER YOU EDIT THE ATTENDANCE OF A SUBJECT,<br /> PLEASE SAVE THE CHANGES BEFORE CHOOSING ANOTHER SUBJECT</p>
            <div className="buttons">
                <button onClick={handleClick} style={{ backgroundColor: "green", fontSize: "x-large" }}>Save</button>
            </div>
        </>
    )
}
import Subject from './Subject'
export default function Homepage() {
  let obj = JSON.parse(localStorage.getItem("attendancePCCOE"));

  let totalAtt = 0;
  let totalLec = 0;

  for (let i in obj) {
    totalAtt += obj[i].attended;
    totalLec += obj[i].lectures;
  }
  let netAvg = (Math.round(totalAtt / totalLec * 10000) / 100);
  netAvg = totalLec === 0 ? 0 : netAvg;

  let sublist = [];

  for (let i in obj) {
    sublist.push(<Subject {...obj[i]} name={i} />)
  }
  return (
    <>
      <p>Your Attendance</p>
      <div class="attendance">
        <div class="attendance-row">
          <div class="attendance-row-tile title">Subject</div>
          <div class="attendance-row-tile title">Total Attended</div>
          <div class="attendance-row-tile title">Total Lectures</div>
          <div class="attendance-row-tile title">Net Attendance</div>
        </div>
        {sublist}
        <div class="attendance-row">
          <div class="attendance-row-tile title">Total</div>
          <div class="attendance-row-tile title">{totalAtt}</div>
          <div class="attendance-row-tile title">{totalLec}</div>
          <div class="attendance-row-tile title">{netAvg}%</div>
        </div>
      </div>
    </>
  )
}

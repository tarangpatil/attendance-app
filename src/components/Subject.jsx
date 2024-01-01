export default function Subject(props) {
  let netAvg = (Math.round(props.attended / props.lectures * 10000) / 100);
  netAvg = props.lectures === 0 ? 0 : netAvg;
  return (
    <>
      <div className="attendance-row">
        <div className="attendance-row-tile">{props.name}</div>
        <div className="attendance-row-tile">{props.attended}</div>
        <div className="attendance-row-tile">{props.lectures}</div>
        <div className="attendance-row-tile">{netAvg}%</div>
      </div>
    </>
  );
}
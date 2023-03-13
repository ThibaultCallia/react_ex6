import { useState } from "react";
import { ProgressBar } from "react-bootstrap";

export default function Progress() {
  const [now, setNow] = useState(60);

  return (
    <>
      <h1>Progress Bar</h1>
      <ProgressBar striped animated now={now} label={`${now}%`} />
      <label htmlFor="percentage">Input percentage:</label>
      <input
        type="number"
        id="percentage"
        name="percentage"
        value={now}
        onChange={(e) => setNow(e.target.value)}
      />
    </>
  );
}

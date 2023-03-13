import { useState } from "react";

export default function ShowHide() {
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={handleButtonClick}>
        {visible ? "hide " : "show "}Title
      </button>
      {visible && <h2>React is cool</h2>}
    </>
  );
}

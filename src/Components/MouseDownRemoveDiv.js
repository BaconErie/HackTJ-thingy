import { useState } from "react";

function MouseDownRemoveDiv({ handleRemove, children }) {
  const [timerId, setTimerId] = useState(null);

  function handleMouseDown() {
    console.log("holding down");
    const newTimerId = setTimeout(() => {
      handleRemove();
    }, 2000);
    setTimerId(newTimerId);
  }

  function handleMouseUp() {
    clearTimeout(timerId);
    setTimerId(null);
  }

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onDoubleClick={handleRemove}
      class = "tasks">
      {children}
    </button>
  );
}

export default MouseDownRemoveDiv;

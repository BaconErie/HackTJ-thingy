import React, { useState } from "react";

function PriorityAgenda() {
  const [PriorityList, setPriorityList] = useState([]);

  const addPriority = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newPriority = {
      name: formData.get("name"),
      expectedTime: formData.get("expectedTime")
    };

    setPriorityList([...PriorityList, newPriority]);
  };

  const printHiOnMouse = (event) => {
    
  }

  return (
    <main>
      <form onSubmit={addPriority}>
        <button type="submit">+</button>
        <input type="text" placeholder="Name" name="name" />
        <input
          type="text"
          placeholder="Expected Duration"
          name="expectedTime"
        />
      </form>
      <div className="PriorityList">
        {PriorityList.map((priority, index) => (
          <div key={index}>
            <p>{priority.name}</p>
            <p>{priority.expectedTime}</p>
            <button onMouseDown={} ></button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PriorityAgenda;

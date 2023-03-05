import React, { useState } from "react";
import MouseDownRemoveDiv from "./MouseDownRemoveDiv";

function TaskAgenda() {
  const [TaskList, setTaskList] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newTask = {
      name: formData.get("name"),
      expectedTime: formData.get("expectedTime")
    };

    setTaskList([...TaskList, newTask]);
  };

  const handleDeleteTask = (indexToFilter) => {
    setTaskList(
      TaskList.filter((Task, index) => {
        return index !== indexToFilter;
      })
    );
  };

  return (
    <main>
      <form onSubmit={addTask}>
        <button type="submit">+</button>
        <input type="text" placeholder="Name" name="name" />
        <input
          type="text"
          placeholder="Expected Duration"
          name="expectedTime"
        />
      </form>
      <div className="TaskList">
        {TaskList.map((Task, index) => (
          <MouseDownRemoveDiv
            key={index}
            handleRemove={() => {
              handleDeleteTask(index);
            }}>
            <p>{Task.name}</p>
            <p>{Task.expectedTime}</p>
          </MouseDownRemoveDiv>
        ))}
      </div>
    </main>
  );
}

export default TaskAgenda;

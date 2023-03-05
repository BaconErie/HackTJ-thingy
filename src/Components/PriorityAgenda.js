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
    <main class="main">
      
      <div>
        <form class="form" onSubmit={addTask}>
          <button class="buttonInput" type="submit">+</button>
          <input class="inputInput" type="text" placeholder="Name" name="name" />
          <input class="inputInput" type="text" placeholder="Expected Duration" name="expectedTime"/>
        </form>

        <div className="TaskList" class = "border">
          <div class = "tasks">
            {TaskList.map((Task, index) => (
              <MouseDownRemoveDiv
                key={index}
                handleRemove={() => {
                  handleDeleteTask(index);
                }}>
                <div class="tasks-d">
                  <p class="task-data">{Task.name}</p>
                  <p class="task-data">{Task.expectedTime}</p>
                </div>
              </MouseDownRemoveDiv>
            ))}
          </div>
        </div>
      </div>

      <div>


      </div>

    </main>
  );
}

export default TaskAgenda;

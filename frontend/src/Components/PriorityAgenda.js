import React, { useState } from "react";
import MouseDownRemoveDiv from "./MouseDownRemoveDiv";

function PriorityAgenda({ initPriorities, initBreak }) {
  const [TaskList, setTaskList] = useState(
    initPriorities ? initPriorities : []
  );
  const [isBreak, setIsBreak] = useState(initBreak ? initBreak : false);

  const addTask = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newTask = {
      name: formData.get("name"),
      expectedTime: formData.get("expectedTime")
    };

    setTaskList([...TaskList, newTask]);

    savePriorityToDB();
    saveIsBreakToDB();
  };

  const handleDeleteTask = (indexToFilter) => {
    setTaskList(
      TaskList.filter((Task, index) => {
        return index !== indexToFilter;
      })
    );

    savePriorityToDB();
    saveIsBreakToDB();
  };

  const savePriorityToDB = async () => {
    window.getCookie = function (name) {
      var match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)")
      );
      if (match) return match[2];
    };

    let { userID } = window.getCookie("userID");
    const body = {
      userID: userID,
      priorities: TaskList
    };

    await fetch("http://localhost:4000/API/DB/UPDATE/Priorities", {
      method: "PATCH",
      body: body
    });
  };

  const saveIsBreakToDB = async () => {
    const determineBreak = TaskList[0].name === "break" ? true : false;

    if (determineBreak !== isBreak) {
      await fetch("http://localhost:4000/API/DB/UPDATE/break", {
        method: "PATCH",
        body: {
          userID: document.cookie,
          isBreak: determineBreak
        }
      });

      setIsBreak(determineBreak);
    }
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

export default PriorityAgenda;

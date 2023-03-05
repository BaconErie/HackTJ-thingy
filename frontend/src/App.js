import React, { useState } from "react";
import PriorityAgenda from "./Components/PriorityAgenda";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const [dataFinishedLoading, setFinishedLoading] = useState(false);

  window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  };

  const userID = window.getCookie("userID");
  const { priorities, locations, isBreak } = fetch(
    "http://localhost:4000/API/DB/POST/UserInfo",
    {
      method: "POST",
      body: {
        userID: userID
      }
    }
  ).then((data) => {
    setFinishedLoading(true);
    return JSON.parse(data);
  });

  if (dataFinishedLoading) {
    return (
      <React.Fragment>
        <Header locations={locations} />
        <PriorityAgenda initBreak={isBreak} initPriorities={priorities} />
      </React.Fragment>
    );
  }
}

export default App;

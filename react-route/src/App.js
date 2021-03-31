import React, { useState } from "react";
import * as singleSpa from "single-spa";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@eo/utils";

const App = ({ name }) => {
  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emitEvent("@eo/react-route/todo/add-task", {
      id: uuid(),
      describe: task,
    });
    console.log("Salvando....");
    updateTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel
        config={() => System.import("@eo/react-parcel")}
        mountParcel={singleSpa.mountRootParcel}
      />
    </>
  );
};

export default App;

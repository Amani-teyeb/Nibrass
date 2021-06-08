import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddTask.css";
import { addTask } from "../../../Redux/actions/todos";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  //   const handleChange = (e) => {
  //     setTask({ ...task, [e.target.name]: e.target.value });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({task}));
    setTask("");
  };
  return (
    <div className="AddTask">
      <h1>! واجباتي</h1>
      <div className="addField">
        <input
          id="addTaskInput"
          size="lg"
          type="text"
          name="task"
          placeholder="Add task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          variant="outline-primary"
          style={{ border: "2px grey solid", color: "grey" }}
          onClick={handleSubmit}
        >
          اضف
        </Button>
      </div>
    </div>
  );
};

export default AddTask;

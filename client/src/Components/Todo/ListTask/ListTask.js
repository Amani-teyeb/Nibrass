import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../../Redux/actions/todos";

const ListTask = () => {
  const todos = useSelector((state) => state.todosReducer.todos.Tasks);
  // const [filtred, setFiltred]= useState(todos);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getTask());
  
   }, []);
  // const handleClick = ()=>{
  //     setFiltred (todos.filter((task)=> task.isDone === true));
  // // }
  // const handleClick2 = ()=>{
  //     setFiltred (todos.filter((task)=> task.isDone === false))
  // }
  // const handleClick3 = ()=>{
  //     setFiltred (todos)
  // }
  return (
    <div className="listTask">
      {/* <div className="filter_btns" style={{ marginBottom: "25px" }}>
            <Button variant="outline-success" onClick={handleClick}>Show Done</Button>
            <Button variant="outline-danger" onClick={handleClick2}> Show Not Done</Button>
            <Button variant="info" onClick={handleClick3}>Remove All Filters</Button>
        </div> */}
      {todos.map((task, index) => (
        <Task toDo_task={task} key={index} index={index} />
      ))}
    </div>
  );
};

export default ListTask;

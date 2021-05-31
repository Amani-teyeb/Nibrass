import React from 'react'
import { Button } from "react-bootstrap"
import "./Task.css"
import { useDispatch } from "react-redux"
import { toggleTask } from "../../../Redux/actions/todos"

const Task = ({ toDo_task, index }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        // dispatching the toggle task action
        // dispatch(toggleTask({ id: toDo_task.id }))
    }
    return (
        <div className="task">
        <div className="taskBtns">
            <Button variant= "success" >حذف</Button>
            {/* <Button variant= "success" onClick={handleClick}>تعديل</Button> */}
        </div>
        <h4 style={{ textDecoration : "none" }}><span className="Task_Number">مهمة{Number(index) + 1}:</span> {toDo_task.task}</h4>
        
    </div>
    )
}

export default Task

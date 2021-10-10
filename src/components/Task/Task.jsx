import React from "react";
import './Task.css'

const Task = ({ task, ...props }) => {
    const ActionBtn = () => (
    <div className='action-btn'>{!task.done ? <p onClick ={props.doneTask}>&#10004;</p> : <p onClick={props.deleteTask}>&#10008;</p>}</div>)

    const className = 'task' + (task.done ? 'task-done' : '')

    return(
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    )
}

export default Task;
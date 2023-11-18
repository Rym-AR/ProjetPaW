import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import './App.css';
const TodoList = () => {  
 const [tasks, setTasks] = useState([]);
 const addTask = () => {
    const newTask = {
      task: "",
      completed: false,
      important: false,
    };

    setTasks([...tasks, newTask]);
 };

 const handleCheckboxChange = (e) => {
    const taskId = e.target.id.split("btn")[1];

    setTasks((prevTasks) => {
      return prevTasks.map((task, index) => {
        if (index === parseInt(taskId)) {
          return { ...task, completed: e.target.checked };
        }

        return task;
      });
    });
 };
const handleStarIconClick = (index) => {
  // alert('salut')
    setTasks((prevTasks) => {
      return prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, important: !task.important };
        }

        return task;
      });
    });
 };

 const deleteTask = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, i) => i !== index);
    });
 };

 return (
    <div className="TodoList">
      <div className="title">
        <h1>Personnel</h1>
        <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
      </div>

      <div className="inputsBox">
        {tasks.map((task, index) => (
          <div className="inputs" key={index}>
            <input
              type="text"
              placeholder="Enter a task here..."
              className="inputText"
              value={task.task}
              onChange={(e) => {
                setTasks((prevTasks) => {
                 return prevTasks.map((task, i) => {
                    if (i === index) {
                      return { ...task, task: e.target.value };
                    }

                    return task;
                 });
                });
              }}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                background: task.important ? "rgba(248, 0, 0, 0.5)" : "none",
              }}
            />

            <input
              type="checkbox"
              className="checkbox"
              id={`btn${index}`}
              checked={task.completed}
              onChange={handleCheckboxChange}
            />&nbsp;

           <FontAwesomeIcon
              icon={faStar}
             onClick={() => handleStarIconClick(index)}
             className={task.important ? "star-filled" : "star-empty"}
/>&nbsp;

           <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} />
         </div>
        ))}
      </div>
    </div>
 );
};

export default TodoList;

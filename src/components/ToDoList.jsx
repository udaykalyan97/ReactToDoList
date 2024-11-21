import React, { useState } from "react";
import { toDoListItems } from "../utils/toDoMockData";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    const [tasks, setTasks] = useState(toDoListItems);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            let identifier = Math.max(...tasks.map((task) => task.id)) + 1;
            setTasks((t) => [...tasks, { id: identifier, name: newTask }]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function toggleCompletion(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    function editTask(index, newName) {
        const updatedTasks = [...tasks];
        updatedTasks[index].name = newName;
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <h2>{props.title}</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        index={index}
                        deleteTask={deleteTask}
                        moveTaskUp={moveTaskUp}
                        moveTaskDown={moveTaskDown}
                        toggleCompletion={toggleCompletion}
                        editTask={editTask} // Pass down the editTask function
                    />
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
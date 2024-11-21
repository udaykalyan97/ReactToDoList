import React, { useState } from "react";

function ToDoItem(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTaskName, setNewTaskName] = useState(props.task.name);

    // Toggle edit mode
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    // Handle input change
    const handleInputChange = (event) => {
        setNewTaskName(event.target.value);
    };

    // Save the edited task
    const handleSaveClick = () => {
        props.editTask(props.index, newTaskName);
        setIsEditing(false);
    };

    return (
        <li className={props.task.completed ? "completed" : ""}>
            <span>
                {props.task.id}{" "}
                {isEditing ? (
                    <input
                        type="text"
                        value={newTaskName}
                        onChange={handleInputChange}
                    />
                ) : (
                    props.task.name
                )}
            </span>
            
            <div className="three-buttons">
                <button
                    className={`complete-button ${props.task.completed ? "completed" : "not-completed"}`}
                    onClick={() => props.toggleCompletion(props.index)}
                >
                    {props.task.completed ? "✔" : "⌫"}
                </button>
                <button
                    className="edit-button"
                    onClick={handleEditClick}
                >
                    {isEditing ? "Cancel" : "Edit"}
                </button>
                {isEditing && (
                    <button
                        className="save-button"
                        onClick={handleSaveClick}
                    >
                        Save
                    </button>
                )}
                <button
                    className="delete-button"
                    onClick={() => props.deleteTask(props.index)}
                >
                    Delete
                </button>
                <button
                    className="up-button"
                    onClick={() => props.moveTaskUp(props.index)}
                >
                    ↑
                </button>
                <button
                    className="down-button"
                    onClick={() => props.moveTaskDown(props.index)}
                >
                    ↓
                </button>
            </div>
        </li>
    );
}

export default ToDoItem;








// import React from "react";

// function ToDoItem(props) {

//     const completedButtonStyle = {backgroundColor: props.task.completed ? "green" : "red"}

//     return (
//         <li>
//             <span>
//                 {props.task.id} {props.task.name}
//             </span>
//             <div className="three-buttons">
//                 <button
//                     className="delete-button"
//                     onClick={() => props.deleteTask(props.index)}
//                 >
//                     Delete
//                 </button>
//                 <button
//                     className="up-button"
//                     onClick={() => props.moveTaskUp(props.index)}
//                 >
//                     Move ↑
//                 </button>
//                 <button
//                     className="down-button"
//                     onClick={() => props.moveTaskDown(props.index)}
//                 >
//                     Move ↓
//                 </button>
//                 <button
//                     className={`complete-button ${props.task.completed ? "completed" : "not-completed"}`}
//                     onClick={() => props.Completion(props.index)}
//                 >
//                     {props.task.completed ? "✔" : "⌫"}
//                 </button>
//             </div>
//         </li>
//     );
// }

// export default ToDoItem;
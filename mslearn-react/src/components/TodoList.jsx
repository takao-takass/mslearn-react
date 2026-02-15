import React, { useState } from 'react';

const initialTasks = [
    { id: self.crypto.randomUUID(), text: 'Drink some coffee' },
    { id: self.crypto.randomUUID(), text: 'Create a TODO app' },
    { id: self.crypto.randomUUID(), text: 'Drink some more coffee' }
];

export default function TodoList() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTaskText, setNewTaskText] = useState("");

    return (
        <article
            className="todo-list"
            aria-label="task list manager">
            <header>
                <h1>TODO</h1>
                <form className="todo-input" onSubmit={addTask} aria-controls="todo-list">
                    <input
                        type="text"
                        required
                        autoFocus
                        placeholder="Enter a task"
                        value={newTaskText}
                        aria-label="new task text"
                        onChange={handleInputChange} />
                    <button
                        className="add-button"
                        aria-label="Add task">
                        Add
                    </button>
                </form>
            </header>
            <ol id="todo-list" aria-live="polite" aria-label="task list">
                {tasks.map((task, index) =>
                    <li key={task.id}>
                        <span className="text">{task.text}</span>
                        <button className="delete-button" onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                        <button className="up-button" onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button className="down-button" onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </article>
    );

    function handleInputChange(event) {
        setNewTaskText(event.target.value);
    }

    function addTask() {
        if (newTaskText.trim() !== "") {
            setTasks(t => [...t, { id: self.crypto.randomUUID(), text: newTaskText }]);
            setNewTaskText("");
        }
        event.preventDefault();
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter(t => t.id !== id);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
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
}


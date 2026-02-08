import React, { useState } from 'react';

const initialTasks = [
    { id: self.crypto.randomUUID(), text: 'Drink some coffee' },
    { id: self.crypto.randomUUID(), text: 'Create a TODO app' },
    { id: self.crypto.randomUUID(), text: 'Drink some more coffee' }
];

function TodoList() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTaskText, setNewTaskText] = useState("");

    return (
        <article
            className="todo-list"
            aria-label="task list manager">
            <header>
                <h1>TODO</h1>
                <form className="todo-input" aria-controls="todo-list">
                    <input
                        type="text"
                        placeholder="Enter a task"
                        value={newTaskText} />
                    <button
                        className="add-button">
                        Add
                    </button>
                </form>
            </header>
            <ol id="todo-list" aria-live="polite" aria-label="task list">
                {tasks.map((task, index) =>
                    <li key={task.id}>
                        <span className="text">{task.text}</span>
                    </li>
                )}
            </ol>
        </article>
    );
}

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

export default TodoList;
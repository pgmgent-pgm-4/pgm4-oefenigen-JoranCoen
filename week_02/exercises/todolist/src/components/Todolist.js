import React, { useState } from 'react';

export default function Todolist() {
    const [tasks, setTasks] = useState(['Work', 'Tasks', 'Household']);
    const [newTask, setNewTask] = useState('');

    function removeTask(taskToRemove) {
        setTasks(prevTasks => prevTasks.filter(task => task !== taskToRemove));
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask(''); 
        }
    }

    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => removeTask(task)}>delete</button>
                    </li>
                ))}
            </ul>
            <label htmlFor="task">Add task</label>
            <input
                type="text"
                id="task"
                name="task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add task</button>
        </div>
    );
}

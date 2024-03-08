import React, { useState } from 'react';
import './App.css';
function TaskManager() {
  // state to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // state for the new task title input
  const [title, setTitle] = useState('');
  // state for the new task description input
  const [description, setDescription] = useState('');
  // state to track editing status
  const [editId, setEditId] = useState(null);
  // temporary state for editing title and description
  const [tempTitle, setTempTitle] = useState('');
  const [tempDescription, setTempDescription] = useState('');

  // function to add a new task
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  // function to toggle task completion status
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // function to start editing a task
  const startEdit = (task) => {
    setEditId(task.id);
    setTempTitle(task.title);
    setTempDescription(task.description);
  };

  // function to save the edited task
  const saveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editId ? { ...task, title: tempTitle, description: tempDescription } : task
    ));
    setEditId(null);
    setTempTitle('');
    setTempDescription('');
  };

  // render the component UI
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={tempDescription}
                  onChange={(e) => setTempDescription(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
                <button onClick={() => toggleTaskCompletion(task.id)}>Toggle Completion</button>
                <button onClick={() => startEdit(task)}>Edit Task</button>
                <button onClick={() => deleteTask(task.id)} className="delete-button">Delete Task</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;

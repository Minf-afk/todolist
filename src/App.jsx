import React, { useState } from 'react';
import './App.css';
import PostIt from './components/PostIt'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Minha Lista de Tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <PostIt key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
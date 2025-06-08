import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskInput.trim() === '') return;
    setTasks([...tasks, { text: taskInput.trim(), completed: false }]);
    setTaskInput('');
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  const saveEdit = (index) => {
    if (editingText.trim() === '') return;
    const newTasks = [...tasks];
    newTasks[index].text = editingText.trim();
    setTasks(newTasks);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Advanced React To-Do List</h1>

      <TodoInput
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        handleAddTask={handleAddTask}
      />

      <FilterButtons filter={filter} setFilter={setFilter} />

      <TodoList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editingIndex={editingIndex}
        startEditing={startEditing}
        editingText={editingText}
        setEditingText={setEditingText}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

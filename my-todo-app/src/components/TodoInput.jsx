import React from 'react';

export default function TodoInput({ taskInput, setTaskInput, handleAddTask }) {
  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        className="todo-input"
      />
      <button onClick={handleAddTask} className="add-btn">
        Add
      </button>
    </div>
  );
}

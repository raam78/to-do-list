import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({
  tasks,
  toggleComplete,
  deleteTask,
  editingIndex,
  startEditing,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editingIndex={editingIndex}
          startEditing={startEditing}
          editingText={editingText}
          setEditingText={setEditingText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

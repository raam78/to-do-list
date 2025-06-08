import React from 'react';

export default function TodoItem({
  task,
  index,
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
    <li className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
      />

      {editingIndex === index ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') saveEdit(index);
              if (e.key === 'Escape') cancelEdit();
            }}
            autoFocus
            className="edit-input"
          />
          <button onClick={() => saveEdit(index)} className="save-btn">
            Save
          </button>
          <button onClick={cancelEdit} className="cancel-btn">
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            onDoubleClick={() => startEditing(index)}
            className={task.completed ? 'completed' : ''}
            title="Double click to edit"
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)} className="delete-btn">
            Delete
          </button>
        </>
      )}
    </li>
  );
}

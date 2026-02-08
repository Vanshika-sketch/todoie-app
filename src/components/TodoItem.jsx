import React from "react";

const TodoItem = () => {
  return (
    <li className="todo-item">
      <div className="left">
        <input type="checkbox" />
        <span className="todo-item-text">Eat</span>
      </div>
      <span className="dots">...</span>
    </li>
  );
};

export default TodoItem;

import React from "react";

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <div className="left">
        <input type="checkbox" />
        <span className="todo-item-text">{props.text}</span>
      </div>
      <span className="dots">...</span>
    </li>
  );
};

export default TodoItem;

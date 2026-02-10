import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import "./style.css";
import CounterComponent from "./components/counterComponent";
const App =()=>{
  return(
    <div className ="todo-container">
      <CounterComponent/>
      <Header text = "Todoie App"/>
      <TodoItem text = "Eat"/>
      <TodoItem text = "Code"/>
      <TodoItem text = "Play"/>
      <TodoItem text = "Gym"/>
      <Button/>
    </div>
      
  )
}

export default App;
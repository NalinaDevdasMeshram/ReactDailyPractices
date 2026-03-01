import "./App.css";
import { useState } from "react";
import React from "react";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";
import TodoItem from "./Component/TodoItem";
function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const handleNewTodo = () => {
    if (title.trim() !== "") return;

    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  console.log(todos);
  const handleDoneTask = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {
    const updatedTodos = todos.filter((todos) => todos.id !== id);
    console.log(updatedTodos);
  };
  return (
    <div>
      <TodoInput
        title={title}
        setTitle={setTitle}
        handleNewTodo={handleNewTodo}
      />
      <TodoList />
      {todos.map((val) => (
        <TodoItem
          key={val.id}
          title={val.title}
          handleDoneTask={handleDoneTask}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;

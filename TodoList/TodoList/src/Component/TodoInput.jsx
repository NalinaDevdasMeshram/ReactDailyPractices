import React, { useState } from "react";

const TodoInput = () => {
  const [inputData, setInputData] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputData = (e) => {
    e.preventDefault();
    if (inputData.trim() == "") return;
    if (editIndex !== null) {
      const updateData = [...todos];
      updateData[editIndex] = inputData;
      setTodos(updateData);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputData]);
    }
    setInputData("");
  };

  const handleUpdate = (index) => {
    setInputData(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const deleteData = todos.filter((item, i) => i !== index);
    setTodos(deleteData);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter Todo Name"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        required
      />
      <button onClick={handleInputData}>{editIndex ? "Edit" : "Add"}</button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h2>{todo}</h2>
            <button
              onClick={() => handleUpdate(index)}
              style={{ margin: "10px" }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoInput;

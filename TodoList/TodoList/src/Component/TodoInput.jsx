import React, { useState } from "react";

const TodoInput = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (editIndex !== null) {
      const updatedTodo = [...todoList];
      updatedTodo[editIndex] = input;
      setTodoList(updatedTodo);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(todoList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filterData = todoList.filter((_, i) => i !== index);
    console.log(filterData);
    setTodoList(filterData);
  };

  return (
    <div className="text-2xl px-8 py-12">
      <h2>ToDo List</h2>
      <form className="flex justify-center items-center border border-gray-500 mt-10 px-8 py-12 rounded-md">
        <input
          type="text"
          placeholder="Enter Todo Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          className="px-4 py-4 w-100 border border-gray-500 rounded-md"
        />
        <button
          onClick={handleAddTodo}
          className="px-8 py-4 m-8 bg-orange-400 rounded-md cursor-pointer hover:bg-amber-700"
        >
          {editIndex !== null ? "update" : "ADD"}
        </button>
      </form>
      <ul>
        {todoList.map((val, index) => {
          return (
            <li
              key={index}
              className="mt-4 px-8 py-4 flex justify-between shadow-2xl rounded-md"
            >
              {val}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoInput;

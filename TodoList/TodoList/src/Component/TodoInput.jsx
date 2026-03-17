import React, { useState } from "react";

const TodoInput = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [editText, setEditText] = useState(null);

  const handleBtnClick = (e) => {
    e.preventDefault();
    if (input.trim()) return;
    if (todoList) {
      const updateData = [...todoList, input];
      console.log(updateData);
      setTodoList(updateData);
    } else {
      alert("something else wrong");
    }
    // setInput("");
  };

  return (
    <div className="text-center text-medium m-10 px-8 py-16">
      <h2>ToDo List</h2>
      <form className="border border-gray-500 m-10 px-8 py-8 rounded-md">
        <input
          type="text"
          placeholder="Enter Todo Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          className="border border-gray-500 m-12 w-150 px-8 py-4 text-medium rounded-md"
        />
        <button
          onClick={handleBtnClick}
          className="px-8 py-4 bg-orange-500 rounded-md cursor-pointer"
        >
          ADD
        </button>
      </form>
      <ul>
        {todoList.map((val, index) => {
          return (
            <li key={index}>
              {val}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoInput;

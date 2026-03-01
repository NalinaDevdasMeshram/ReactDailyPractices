import React from "react";
import { FaBook } from "react-icons/fa";
const TodoInput = ({ title, setTitle, handleNewTodo }) => {
  return (
    <div className=" w-full mt-8 flex flex-col items-center justify-center">
      <h2 className="m-2 p-2 font-semibold text-3xl">TodoInput</h2>
      <div className="w-full  bg-gray-100 border rounded-md px-10 py-15 shadow-sm">
        <div className="flex items-center border rounded-md overflow-hidden bg-white">
          <FaBook className="text-solid text-lg w-10 h-10 bg-[#10aab2]" />
          <input
            type="text"
            placeholder="New Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-2xl p-2 rounded-mb"
          />
        </div>
        <button
          className="w-full mt-5 text-2xl bg-[#1f9aa5] text-white py-3 rounded-md hover:bg-[#17848d] transition duration-200 cursor-pointer"
          onClick={handleNewTodo}
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default TodoInput;

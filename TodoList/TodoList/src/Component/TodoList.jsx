import React from "react";

const TodoList = () => {
  return (
    <div className="mt-10 p-2 font-semibold">
      <h2 className="text-3xl">TodoList</h2>
      <div className="flex justify-around mt-5">
        <button className="bg-[#1f9aa5] text-white py-3 px-12 rounded-md hover:bg-[#17848d] transition duration-200 cursor-pionter">
          All
        </button>
        <button className="bg-[#1f9aa5] text-white py-3 px-12 rounded-md hover:bg-[#17848d] transition duration-200 cursor-pionter">
          Done
        </button>
        <button className="bg-[#1f9aa5] text-white py-3 px-12 rounded-md hover:bg-[#17848d] transition duration-200 cursor-pionter">
          Todo
        </button>
      </div>
      <div className="flex justify-between text-white mt-5">
        <button className="px-6 py-4 bg-red-500 rounded-md cursor-pointer hover:bg-red-900 transition duration-200">
          Delete done tasks
        </button>
        <button className="px-6 py-4 bg-red-500 rounded-md cursor-pointer hover:bg-red-900 transition duration-200">
          Delete All tasks
        </button>
      </div>
    </div>
  );
};

export default TodoList;

import React from "react";
import {
  MdEdit,
  MdDelete,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

const TodoItem = ({ todos, handleDelete, handleDoneTask, handleEdit }) => {
  return (
    <div className="flex justify-between items-center border p-4 mb-4 rounded-md bg-gray-100">
      <h6
        className={`text-lg font-medium ${
          todos.completed ? "line-through text-red-500" : "text-gray-800"
        }`}
      >
        {todos.title}
      </h6>

      {/* Actions */}
      <div className="flex items-center gap-4 text-xl">
        {/* Checkbox */}
        <button onClick={() => handleDoneTask(todos.id)}>
          {todos.completed ? (
            <MdCheckBox className="text-green-600" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-gray-600" />
          )}
        </button>

        {/* Edit */}
        <button onClick={() => handleEdit(todos.id)}>
          <MdEdit className="text-yellow-500 hover:scale-110 transition" />
        </button>

        {/* Delete */}
        <button onClick={() => handleDelete(todos.id)}>
          <MdDelete className="text-red-500 hover:scale-110 transition" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

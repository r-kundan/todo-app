import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeTodo,
  markCompleted,
  markIncomplete,
  updateTodo,
} from '../redux/action';
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const TodoItems = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(updateTodo(index, updatedText));
    setIsEditing(false);
  };

  return (
    <li className="flex flex-col  sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-black">
          {index + 1}.
        </span>
        {isEditing ? (
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="mr-4 border border-gray-300 rounded px-2 py-1"
          />
        ) : (
          <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className='space-x-3 ml-8'>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
        <button
          className="text-sm bg-purple-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => setIsEditing(!isEditing)}
        >
          <FiEdit />
        </button>
        {isEditing && (
          <button
            className="text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItems;

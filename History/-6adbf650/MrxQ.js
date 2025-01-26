"use client";

import React, { useState, useEffect } from "react";

import { useLocalStorage } from "./hooks/useLocalStorage";
import TodoEntry from "./components/TodoEntry";
import NewTaskInput from "./components/NewTaskInput";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component renders on the client-side
  }, []);

  // Prevent rendering before the component mounts on the client
  if (!isClient) return null;

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>

      <div className="title-wrapper text-center mb-4">
        <h1 className="text-4xl font-semibold inline-block text-slate-800">Simple Tasker</h1>
      </div>
      <div className="todo-list shadow-lg overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-500 h-80 w-72 mx-auto mb-5 bg-white bg-opacity-20 rounded-lg scrollbar-thumb-rounded-full p-3">
        {todos.length === 0 ? (
          <div className="flex flex-col items-center justify-center pb-20 h-full text-slate-700 opacity-50">
            <p className="tWrite-center">Add a new task</p>
            <p className="text-center">and start planning your day.</p>
          </div>
        ) : (
          <ul>
            {todos
              .sort((a, b) => a.completed - b.completed) // Sort by completion status
              .map((todo, index) => (
                <TodoEntry
                  key={index}
                  todo={todo.text}
                  completed={todo.completed}
                  index={index}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              ))}
          </ul>
        )}
      </div>

      <div className="input-wrapper  flex justify-center">
        <input
          className="rounded-l-lg border-gray-300 w-56 p-2.5"
          type="text"
          placeholder="Write a new task"
          onKeyDown={(e) => {
            const value = e.target.value.trim();
            if (e.key === "Enter" && value !== "") {
              addTodo({ text: value, completed: false });
              e.target.value = "";
            }
          }}
        />

        <button
          className="rounded-r-lg bg-indigo-500 text-white px-3"
          onClick={() => {
            const input = document.querySelector('input[type="text"]');
            const value = input.value.trim();
            if (value !== "") {
              addTodo({ text: value, completed: false });
              input.value = "";
            }
          }}
        >
          Add
        </button>
      
      </div>
      {/* <NewTaskInput addTodo={addTodo} /> */}
    </div>
  );
}

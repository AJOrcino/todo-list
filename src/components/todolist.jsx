import { useState } from "react";

export const List = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodo((prevTodo) => [
        ...prevTodo,
        {
          id: Date.now(),
          text: input,
          completed: false,
        },
      ]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-600">
      <div className="bg-white shadow-lg rounded-3xl p-16 w-[35%]">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">
          Create Todo List
        </h1>
        <h3 className="text-2xl font-bold text-center text-green-500 mb-10">
          React | Tailwind
        </h3>
        <div className="mb-4 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a new todo"
            className="flex-grow py-2 px-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700"
          />
          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todo.map((item) => (
            <li
              key={item.id}
              className="flex items-center p-2 rounded-lg bg-slate-100 border border-gray-200"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTodo(item.id)}
                className="mr-2 text-blue-500"
              />
              <span
                className={`flex-grow ${
                  item.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {item.text}
              </span>
              <button
                onClick={() => deleteTodo(item.id)}
                className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

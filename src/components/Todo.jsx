import React, { useRef, useState } from "react";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const inputRef = useRef();
  const handleTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodo([...todos, newItem]);
    inputRef.current.value = "";
  };
  const handleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodo(newTodos);
  };
  const deleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };
  return (
    <>
      <h2>To Do List</h2>
      <div className="container">
        <ul>
          {todos.map(({ text, completed }, index) => (
            <div className="item">
              <li
                className={completed ? "done" : ""}
                key={index}
                onClick={() => handleDone(index)}
              >
                {text}
              </li>
              <span onClick={() => deleteItem(index)}>x</span>
            </div>
          ))}
        </ul>
        <input ref={inputRef} placeholder="Enter Item..." />
        <button onClick={handleTodo}>Add</button>
      </div>
    </>
  );
};

export default Todo;

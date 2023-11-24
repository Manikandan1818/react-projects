import { useState } from "react";
import "./style.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const generateID = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        id: generateID,
        text: input,
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <div className="wrapper">
        <input
          type="text"
          placeholder="enter your new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>

        <ul className="todoList">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;

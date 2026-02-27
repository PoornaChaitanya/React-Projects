import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default TodoForm;

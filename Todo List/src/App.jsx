import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <input type="text" className="search-bar" placeholder="Search here..." onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

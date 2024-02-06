import TodoEdit from "./components/TodoEdit";
import TodoList from "./components/TodoList";
import { useState } from "react";
import "./index.css";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    // prevTodos.add(newTodo)
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => {
      prevTodos.filter(item => item.id !== id)
    });
  }

  return (
    <div className="app">
      <TodoEdit onAddTodo={handleAddTodo} />
      <TodoList todos={todos} deleteData={handleDeleteTodo} />
    </div>
  );
};

export default Home;

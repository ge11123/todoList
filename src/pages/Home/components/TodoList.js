import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteData }) => {
  return (
    <div className="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteData={() => deleteData(todo.id)} />
      ))}
    </div>
  );
};

export default TodoList;

const TodoItem = ({ todo, deleteData }) => {

  return (
    <div className="item">
      <p>{todo.text}</p>
      <p>{todo.date}</p>
      <p>{todo.time}</p>
      <button onClick={deleteData} className="remove">刪除</button>
    </div>
  );
};

export default TodoItem;

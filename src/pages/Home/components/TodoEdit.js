import { useState } from "react";
import { v4 } from "uuid";


const TodoEdit = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleAddItem = () => {
    const newTodo = {
      id: v4(),
      text: text,
      date: date,
      time: time,
    };

    // 實作onAddTodo
    onAddTodo(newTodo);

    // 新增完後把文字框設定成預設空的
    setText("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事 : </p>
      <input type="text" value={text} onChange={handleTextChange} />
      <p>日期</p>
      <input type="date" value={date} onChange={handleDateChange} />
      <p>時間 : </p>
      <input type="time" value={time} onChange={handleTimeChange} />
      <button onClick={handleAddItem} className="add">
        新增
      </button>
    </div>
  );
};

export default TodoEdit;

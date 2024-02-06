import { useState } from "react";

const Edit = ({ add }) => {

    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function textChange(x) {
        setText((x) => x.target.value)
    }


    function addIcon() {
        add(() => [1, 3, 5]);
    }



    return <div>
        <h1>備忘錄</h1>

        <p>記事 : </p>
        <input type="text"></input>

        <p>日期</p>
        <input type="date"></input>

        <p>時間 : </p>
        <input type="time"></input>

        <button onClick={addIcon} className="add">新增</button>
    </div>;

}


export default Edit;
import Edit from "./components/Edit";
import Item from "./components/Item";
import List from "./components/List";
import "./index.css"
import { useState } from "react";

const Home = () => {
    // const [state, setState] = useState(initialValue);


    // 使用hook 宣告狀態變數state, 更新狀態函數setState, 並宣告初始值100
    const [data, setData] = useState([]);

    return <div className="app">
        <Edit add={setData} />
        <List datas={data} />
    </div>;
}


export default Home;
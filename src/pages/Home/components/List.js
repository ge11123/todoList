import Item from "./Item";


const arr = "1"
const List = ({ datas }) => {

    console.log("datas:", datas);
    return <div className="list" >
        {
            datas.map((i) => <Item key={"item"+i} value={i} />)
        }
    </div>;
}


export default List;
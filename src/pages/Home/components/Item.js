const Item = ({value}) => {
    return <div className="item">
        {value}
        <button className="remove">刪除</button>
    </div>

}


export default Item;
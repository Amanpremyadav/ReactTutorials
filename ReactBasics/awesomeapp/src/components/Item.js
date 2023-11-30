import './Item.css';

function Item(props) {
    const name= props.ItemName;
    return (
        <div>
            <p className="item1">{name}</p>
            <p>{props.children}</p>
        </div>
        
    );
}

export default Item;
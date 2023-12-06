import './Item.css';

function Item(props) {
    const name= props.name;
    return (
        <div>
            <p className="item1">{name}</p>
        </div>
        
    );
}

export default Item;
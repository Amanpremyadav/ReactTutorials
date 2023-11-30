import './ItemDate.css';

function ItemDate(props) {
   const day=props.ItemDay;
   const month=props.ItemMonth;
   const year=props.ItemYear;

    return (
       <div className='mfg-date'>
          <span>{day }</span>
          <span>{month }</span>
          <span>{year}</span>
       </div>
    );
}

export default ItemDate;
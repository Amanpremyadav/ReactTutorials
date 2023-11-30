import React, { useState } from "react";
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
  
  const[title, setTitle]=useState(props.title);
  function clickHandler() {
    setTitle("popcorn");
    console.log("button clicked");
    
  }
    return (
      <Card>
      <div  className="product-item">
          <ProductDate date={props.date}></ProductDate>
            <div className="product-item_description">
              <h2>{title}</h2>
            </div>
           <button onClick={clickHandler}>Add to Cart</button>
      </div>
      </Card>
    );
}

export default ProductItem;
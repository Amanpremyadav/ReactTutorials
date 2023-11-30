import React from "react";
import Card from './Card';
import ProductItem from './ProductItem';
import './Products.css';

function Products(props) {
    return (
       <Card>
       <div className="products">
            <ProductItem title={props.items[0].title} date={props.items[0].date}></ProductItem>
            <ProductItem title={props.items[1].title} date={props.items[1].date}></ProductItem>
            <ProductItem title={props.items[2].title} date={props.items[2].date}></ProductItem>
            <ProductItem title={props.items[3].title} date={props.items[3].date}></ProductItem>
       </div>
       </Card>
    );
}

export default Products;
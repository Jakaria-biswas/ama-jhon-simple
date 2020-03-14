import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './product.css';

const Product = (props) => {
    // console.log(props.product);
    const {name,img,seller,price,stock}=props.product;
    // console.log(props);
    return (
        <div className="product">
            <div> 
              <img src={img} alt=""/>
            </div>
            <div> 
                <div className="product-name">
            <h4>{name}</h4>
            <br/>
            <p>by:{seller} </p>
            <p><small>${price}</small></p>
            <p><small>only {stock} stock order-soon</small></p>
            <button onClick={() => props.handleAddProduct(props.product)}  className="main-button"> < FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            </div>
        </div>
    );
};

export default Product;
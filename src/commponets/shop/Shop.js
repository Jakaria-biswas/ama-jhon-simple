import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
   
   
    const showData = fakeData.slice(0,10);
    const [products,setProducts]=useState(showData)

    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        // console.log('click add' ,product) 
       
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className ="shop-container">
             
              <div className="product-container">
                    
        {
            products.map(pd => <Product handleAddProduct = {handleAddProduct} product={pd} ></Product>)
        }
                   
              </div>
              <div className="product-cart">
                   <Cart cart = {cart}></Cart>
              </div>
        </div>


    );
};

export default Shop;
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

          let total = 0;
          for(let i =0; i<cart.length; i++){
              const product = cart [i];
              total = total + product.price;
          }

          let shopping =0;
        
          if(total > 35){
              shopping = 0;
          }
          else if(total > 15){
              shopping = 4.99;
          }
          else if(total > 0){
            shopping = 12.99
        }

        let tax = (total/10).toFixed(2);
        const totalGrand =(total + shopping + Number(tax)).toFixed(2);

        const formateNumber = num => {

            const precision = num.toFixed(2);
            return Number(precision);

        }

              
    return (
        <div className="cart-container" >
             <h3>Order summary</h3>
             <p>Items ordered: {cart.length}</p>
            <p>Prise: ${formateNumber(total)}</p>
             <p>Shopping Cost: ${shopping}</p>
            <p>VAT + TAX : ${tax}</p>
             <p>Total prise: ${totalGrand}</p>

        </div>
    );
};

export default Cart;
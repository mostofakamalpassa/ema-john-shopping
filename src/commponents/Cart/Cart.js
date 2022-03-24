import React from 'react';
import './Cart.css'

const Cart = (props) => {
     //const {cart} = props.carts;
     console.log(props.carts);

     const totalPrice = props.carts.reduce((prev, current)=> prev + current.price, 0);
     const shipping = props.carts.reduce((prev, current)=> prev + current.shipping, 0);

     const tax = totalPrice * .10;

    //  console.log(totalPrice);
    return (
        <div className='cart'>
            <h2>Cart Summary</h2>
                <h3>Total Selected Items : {props.carts.length}</h3>
                <h4>Total Price: ${totalPrice}</h4>
                <h4>Shipping:${shipping} </h4>
                <h4>Tax: ${tax.toFixed(2)}</h4>
                <h4>Grand Total:${(totalPrice+shipping+tax).toFixed(2)}</h4>

                <div>
                    <button className='preview' style={{border:'none', fontSize:'20px', 
                    fontWeight:'bold', padding:'10px 20px',
                     display:'block',cursor:'pointer'}}>Preview product</button>

                    <button className='add-to-cart' style={{border:'none', fontSize:'20px', fontWeight:'bold', padding:'10px 20px', display:'block', marginTop:'20px'}}>Add To Cart</button>
                </div>
                
       </div>

    );
};

export default Cart;
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const {cart} = props.carts;
    // console.log(props.carts.length);
    return (
        <div className='cart'>
        <h2>Cart Summary</h2>
            <h3>Total Selected Items : {props.carts.length}</h3>
       </div>

    );
};

export default Cart;
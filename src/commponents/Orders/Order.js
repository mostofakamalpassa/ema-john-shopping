import React from 'react';
import './Orders.css';
import useCart from '../hooks/useCart';
const Order = () => {
    const [cart, setCart] = useCart();
    return (
        <div>
            <h2>Orders {cart.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas fuga consequuntur magni accusantium culpa repudiandae dignissimos! Enim, expedita? Quas!</p>
        </div>
    );
};

export default Order;
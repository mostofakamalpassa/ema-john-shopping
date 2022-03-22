import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShop, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, price, seller, stock, ratings, img} = props.product;
    return (
        <div className='prodcut-cart'>
           <img src={img} alt="" />

           <div className='cart-text'>
               <h2>{name}</h2>
               <h4>Price: {price}</h4>
               <h4>Stock: {stock}</h4>

               <p><small>Menufacture:{seller}</small></p>
               <p><small>Rating : {ratings} star</small></p>
           </div>

           <button className='button-cart'>
               <p>Add to cart  <FontAwesomeIcon icon={faCartShopping}  style={{'marginLeft':'10px'}}></FontAwesomeIcon></p> 
           </button>
           
        </div>
    );
};

export default Product;
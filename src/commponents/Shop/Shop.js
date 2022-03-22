import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('products.json')
        .then( data => data.json())
        .then(data => setProducts(data));

    }, []);

    console.log(products);

    return (
        <div className='shop-area'>
           <div className="product-container">
                {
                    products.map((product, index)=> <Product product={product} key={index}></Product>)
                }
              
           </div>
           <div className="product-cart-container">
               <h2>Cart Summary</h2>
           </div>
        </div>
    );
};

export default Shop;
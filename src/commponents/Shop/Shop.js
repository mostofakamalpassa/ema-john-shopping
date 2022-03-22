import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then( data => data.json())
        .then(data => setProducts(data));

    }, []);

    const addToCartHandle = (product) =>{
        //console.log(product)

        const newProduct = [...cart, product];

        setCart(newProduct);
    }

   // console.log(products);

    return (
        <div className='shop-area'>
           <div className="product-container">
                {
                    products.map((product, index)=> <Product product={product}
                    addToCartHandle={addToCartHandle}
                    key={index}></Product>)
                }
              
           </div>
           <div className="product-cart-container">
               <h2>Cart Summary</h2>
                <h3>Total Selected Items : {cart.length}</h3>

           </div>
        </div>
    );
};

export default Shop;
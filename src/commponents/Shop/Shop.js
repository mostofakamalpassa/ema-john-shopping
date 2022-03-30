import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';

const Shop = () => {
    // const [products, setProducts] = useState([]);
    const [products, setProducts]= useProducts();
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart();


    const addToCartHandle = (product) =>{
        //console.log(product)

        const newProduct = [...cart, product];

        setCart(newProduct);
        addToDb(1);
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
               {/* <h2>Cart: {cart.length}</h2> */}
              <Cart carts={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;
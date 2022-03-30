import React from 'react';
import "./Header.css";
import logo from '../../images/Logo.svg';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className='manu'>
            <img src={logo} alt="" />
            <ul>
                {/* <li><a href="/home">Home</a></li> */}
                 <li><Link to='/home'>Shop</Link> </li>
                <li><Link to='/order'>Order</Link></li>
                {/* <li><a href="/order">Order</a></li> */}
                {/* <li><a href="/order/Review">Order Review</a></li> */}
                <li><Link to="inventory">Inventory</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
           
        </div>
    );
};

export default Header;
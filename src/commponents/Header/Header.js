import React from 'react';
import "./Header.css";
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='manu'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/order">Order</a></li>
                <li><a href="/order/Review">Order Review</a></li>
                <li><a href="/magage/inventory">Manage Inventory</a></li>
            </ul>
           
        </div>
    );
};

export default Header;
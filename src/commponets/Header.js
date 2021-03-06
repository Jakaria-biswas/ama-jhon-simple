import React from 'react';
import logo from '../../src/images/logo.png';
import './Header.css/header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/mange">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
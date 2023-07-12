import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    const itemCount = 5; // Número hardcodeado

    return ( <
        div className = "cart-widget" >
        <
        FaShoppingCart className = "cart-widget-icon" / >
        <
        span className = "cart-widget-notification" > { itemCount } < /span> <
        /div>
    );
};

export default CartWidget;
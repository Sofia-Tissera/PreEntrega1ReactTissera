import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return ( <
        nav >
        <
        div className = "navbar-brand" > Tienda Noventosa < /div> <
        ul className = "navbar-menu" >
        <
        li className = "navbar-menu-item" > < a href = "#" > Inicio < /a></li >
        <
        li className = "navbar-menu-item" > < a href = "#" > Hombres < /a></li >
        <
        li className = "navbar-menu-item" > < a href = "#" > Mujeres < /a></li >
        <
        li className = "navbar-menu-item" > < a href = "#" > Niños < /a></li >
        <
        li className = "navbar-menu-item" > < a href = "#" > Ofertas < /a></li >
        <
        /ul> <
        CartWidget / >
        <
        /nav>
    );
};

export default NavBar;